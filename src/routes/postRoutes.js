import express from 'express';

import verifyToken from '../utils/verifyToken';
import {
  addPost,
  getPostsByUser,
} from '../handlers/post';

const postRouter = express.Router();

postRouter.post('/', addPost);
postRouter.get('/', verifyToken, getPostsByUser);

export default postRouter;
