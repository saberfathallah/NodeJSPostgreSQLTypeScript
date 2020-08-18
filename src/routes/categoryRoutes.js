import express from 'express';

import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from '../handlers/category';

const categoryRouter = express.Router();

categoryRouter.post('/', createCategory);
categoryRouter.delete('/:id', deleteCategory);
categoryRouter.get('/', getAllCategories);

export default categoryRouter;
