import { Request, Response, NextFunction } from 'express';

import { AppError } from '../utils/AppError';
import { CreateCommentRequest, DeleteCommentRequest, UpdateCommentRequest } from './types';
import {
  createComment,
  getPostCommentsService,
  removeComment,
  updateComment,
} from '../services/comment.service';

export const create = async (req: CreateCommentRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.userId) {
      throw new AppError('No access', 401);
    }

    const comment = await createComment(req.params.id, req.userId, req.body.text);

    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

export const getPostComments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const comments = await getPostCommentsService(req.params.id);

    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: UpdateCommentRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.userId) {
      throw new AppError('No access', 401);
    }

    const comment = await updateComment(req.params.id, req.userId, req.body.text);

    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: DeleteCommentRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.userId) {
      throw new AppError('No access', 401);
    }

    const result = await removeComment(req.params.id, req.userId);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
