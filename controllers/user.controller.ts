import { Response, NextFunction } from 'express';

import { AppError } from '../utils/AppError';
import { getUser, loginUser, registerUser } from '../services/user.service';
import { LoginRequest, MeRequest, RegisterRequest } from './types';

export const register = async (req: RegisterRequest, res: Response, next: NextFunction) => {
  try {
    const { token, ...cleanUser } = await registerUser(req.body);

    res.status(201).json({ ...cleanUser, token });
  } catch (err) {
    next(err);
  }
};

export const login = async (req: LoginRequest, res: Response, next: NextFunction) => {
  try {
    const { token, ...cleanUser } = await loginUser(req.body);

    res.status(200).json({
      ...cleanUser,
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const getMe = async (req: MeRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.userId) {
      throw new AppError('No access', 401);
    }

    const cleanUser = await getUser(req.userId);

    res.status(200).json(cleanUser);
  } catch (err) {
    next(err);
  }
};
