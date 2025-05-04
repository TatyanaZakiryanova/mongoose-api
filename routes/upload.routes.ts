import express, { Request, Response, NextFunction } from 'express';
import multer, { MulterError } from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

import { checkAuth } from '../middlewares';
import { AppError } from '../utils/AppError';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (_, file) => ({
    folder: 'your-app-images',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],
    public_id: file.originalname.split('.')[0],
  }),
});

const upload = multer({ storage });

const router = express.Router();

router.post(
  '/upload',
  checkAuth,
  upload.single('image'),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file || !('path' in req.file)) {
        throw new AppError('No file uploaded', 400);
      }

      const file = req.file as Express.Multer.File & { path: string };

      res.json({
        url: file.path,
      });
    } catch (err) {
      next(err);
    }
  },
);

export default router;
