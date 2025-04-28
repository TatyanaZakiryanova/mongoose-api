import express from 'express';

import { commentController, postController } from '../controllers';
import { validateRequest, checkAuth } from '../middlewares';
import { commentCreateValidation, postCreateValidation } from '../validators/post.validator';

const router = express.Router();

router.get('/', postController.getAll);
router.get('/:id', postController.getOne);
router.post('/', checkAuth, postCreateValidation, validateRequest, postController.create);
router.patch('/:id', checkAuth, postCreateValidation, validateRequest, postController.update);
router.delete('/:id', checkAuth, postController.remove);

router.get('/:id/comments', commentController.getPostComments);
router.post(
  '/:id/comments',
  checkAuth,
  commentCreateValidation,
  validateRequest,
  commentController.create,
);

export default router;
