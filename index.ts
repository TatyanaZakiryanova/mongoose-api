import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerConfig from './config/swagger.config';

import postRoutes from './routes/post.routes';
import uploadRoutes from './routes/upload.routes';
import tagsRoutes from './routes/tags.routes';
import commentRoutes from './routes/comment.routes';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI || '')
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB error', err));

const app = express();

const swaggerSpec = swaggerJSDoc(swaggerConfig);

app.use(express.json());
app.use(cors());

app.use('/auth', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use(uploadRoutes);
app.use(tagsRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server running on port ${PORT}`);
});
