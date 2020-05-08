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


app.get('/', (req, res) => res.json({ msg: 'dssdddd' }));

app.post('/users', async (req, res) => {
  const args = req.body;
  try {
    const user = await models.User.create(args);
    res.json({ user });
  } catch (error) {
    console.log('error ', error);
  }
});

connectDataBase()
  .then(() => {
    app.listen(port, () => console.log(`🚀 application ready at ${port}`));
  })
  .catch((err) => console.log(err));
