/* eslint-disable @typescript-eslint/camelcase */
import Joi from 'joi';

import models from '../../models';
import validateUser from '../../utils/validateUser';

const deleteCategory = async (req, res) => {
  validateUser(req, res);
  try {
    await models.Category.destroy({
      where: { id: req.params.id },
    });
    return res.status(200).json({ error: null, categoryId: req.params.id });

  } catch (error) {
    return res.status(500).json({ category: null, error });
  }
};

export default deleteCategory;
