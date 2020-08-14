import express from 'express';

import {
  createCategory,
  deleteCategory,
} from '../handlers/category';

const categoryRouter = express.Router();

categoryRouter.post('/', createCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
