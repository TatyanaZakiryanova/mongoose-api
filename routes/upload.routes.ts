import express from 'express';

import { checkAuth } from '../middlewares';
import { uploadController } from '../controllers';
import { uploadMiddleware } from '../middlewares/multer.middleware';

const router = express.Router();

router.post('/upload', checkAuth, uploadMiddleware.single('image'), uploadController.upload);

export default router;
