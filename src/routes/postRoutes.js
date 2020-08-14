import express from 'express';

import {
  addPost,
} from '../handlers/post';

const postRouter = express.Router();

postRouter.post('/', addPost);

export default postRouter;
