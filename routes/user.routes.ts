import express from 'express';

import { validateRequest, checkAuth } from '../middlewares';
import { userController } from '../controllers';
import { loginValidation, registerValidation } from '../validators/user.validator';

const router = express.Router();

router.post('/login', loginValidation, validateRequest, userController.login);
router.post('/register', registerValidation, validateRequest, userController.register);
router.get('/me', checkAuth, userController.getMe);

export default router;
