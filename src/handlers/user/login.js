/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Joi from 'joi';

import models from '../../models';

const schema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
    .error(() => ({
      message: 'email non valid !',
    })),
  password: Joi.string().required(),
});

const login = async (req, res) => {
  const { email, password } = req.body;
  const { error } = Joi.validate({ email, password }, schema);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const userFromDB = await models.User.findOne({ where: { email } });
    if (
      !userFromDB
      || !bcrypt.compareSync(password, userFromDB.password)
    ) {
      return res.status(400).json({ error: 'Vos identifiants ne semblent pas corrects.' });
    }
    const token = jwt.sign({ id: userFromDB.id }, 'jwt_secret', { expiresIn: '24h' });
    return res
      .header('authorization', `Bearer ${token}`)
      .status(200)
      .send({ user: userFromDB, token });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

export default login;
