/* eslint-disable no-console */

import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import models from './models';
import connectDataBase from './initDatabase';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.post('/users', async (req, res) => {
  const args = req.body;
  try {
    const user = await models.User.create(args);
    res.json({ user });
  } catch (error) {
    console.log('error ', error);
  }
});

app.post('/categories', async (req, res) => {
  const args = req.body;
  try {
    const category = await models.Category.create(args);
    res.json({ category });
  } catch (error) {
    console.log('error ', error);
  }
});

app.delete('/categories/:id', async (req, res) => {
  try {
    await models.Category.destroy({
      where: { id: req.params.id },
    });
    res.json(`category deleted with id ${req.params.id}`);
  } catch (error) {
    console.log('error ', error);
  }
});

app.post('/posts', async (req, res) => {
  const args = req.body;
  try {
    const post = await models.Post.create(args);
    res.json({ post });
  } catch (error) {
    console.log('error ', error);
  }
});

connectDataBase()
  .then(() => {
    app.listen(port, () => console.log(`🚀 application ready at ${port}`));
  })
  .catch((err) => console.log(err));
