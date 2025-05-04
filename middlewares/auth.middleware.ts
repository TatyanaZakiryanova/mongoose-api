import { NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import { AuthRequest } from '../types';
import { AppError } from '../utils/AppError';

export default (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (!token) {
    throw new AppError('No token provided', 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as JwtPayload & { _id: string };
    req.userId = decoded._id;
    next();
  } catch (err) {
    next(new AppError('Invalid token', 401));
  }
};
