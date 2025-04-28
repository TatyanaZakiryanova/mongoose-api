export interface RegisterUserInput {
  email: string;
  password: string;
  fullName: string;
  avatarUrl?: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface CreatePostInput {
  title: string;
  text: string;
  tags: string[];
  imageUrl?: string;
}

export interface CreateCommentInput {
  text: string;
}
