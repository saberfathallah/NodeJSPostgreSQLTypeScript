/* eslint-disable no-console */

import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import models from './models';
import connectDataBase from './initDatabase';
import routes from './routes';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

routes(app);

connectDataBase()
  .then(() => {
    app.listen(port, () => console.log(`🚀 application ready at ${port}`));
  })
  .catch((err) => console.log(err));
