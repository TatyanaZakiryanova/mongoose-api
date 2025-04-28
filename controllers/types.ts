import { Request } from 'express';

import {
  CreateCommentInput,
  CreatePostInput,
  LoginUserInput,
  RegisterUserInput,
} from '../services/types';

//post
export interface Params {
  [key: string]: string;
}

export interface CreatePostRequest extends Request<{}, {}, CreatePostInput> {
  userId?: string;
}

export interface UpdateRequest extends Request<Params, {}, CreatePostInput> {
  userId?: string;
}

export interface DeleteRequest extends Request<Params> {
  userId?: string;
}

export interface GetAllQuery {
  sort?: 'popular';
  tag?: string;
}

//user
export interface RegisterRequest extends Request<{}, {}, RegisterUserInput> {}

export interface LoginRequest extends Request<{}, {}, LoginUserInput> {}

export interface MeRequest extends Request {
  userId?: string;
}

//comment
export interface CommentParams {
  [key: string]: string;
}

export interface CreateCommentRequest extends Request<CommentParams, {}, CreateCommentInput> {
  userId?: string;
}

export interface UpdateCommentRequest extends Request<CommentParams, {}, CreateCommentInput> {
  userId?: string;
}

export interface DeleteCommentRequest extends Request<CommentParams> {
  userId?: string;
}
