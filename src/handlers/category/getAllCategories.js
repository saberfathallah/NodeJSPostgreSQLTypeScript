/* eslint-disable @typescript-eslint/explicit-function-return-type */
import models from '../../models';

const getAllCategories = async (req, res) => {
  try {
    const categories = await models.Category.findAll();
    return res.status(200).json({ error: null, categories });
  } catch (error) {
    return res.status(500).json({ categories: null, error });
  }
};

export default getAllCategories;
