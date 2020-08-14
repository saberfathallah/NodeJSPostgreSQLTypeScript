/* eslint-disable @typescript-eslint/camelcase */
import Joi from 'joi';

import models from '../../models';
import validateUser from '../../utils/validateUser';

const schema = Joi.object({
  name: Joi.string().required().error(() => ({ message: 'name is required or string !' })),
  level: Joi.number().required().valid(1, 2, 3, 4).error(() => ({ message: 'level is required or one of 1, 2, 3, 4 !' })),
  parent_id: Joi.number().optional().error(() => ({ message: 'categoryId is obejctId !' })),
});

const addCategory = async (req, res) => {
  validateUser(req, res);

  const { name, level, parent_id } = req.body;
  const { error } = Joi.validate({ name, level, parent_id }, schema);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const category = await models.Category.create({
      name, level, parent_id,
    });


    return res.status(200).json({ error: null, category });
  } catch (err) {
    console.log('err', err);
    return res.status(500).json({ category: null, error: err });
  }
};

export default addCategory;
