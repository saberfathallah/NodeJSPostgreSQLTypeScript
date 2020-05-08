/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Client } from 'pg';

import models from './models';

const checkExistingDataBase = async () => {
  const client = new Client({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  });
  client.connect();
  try {
    const isDbCreated = await client.query(`CREATE DATABASE ${process.env.DATABASE_NAME}`);
    if (!isDbCreated) console.log('failed to create database');
    return isDbCreated;
  } catch (err) {
    // err because the database already exists
  }
  client.end();
  return false;
};

const connectDataBase = async () => {
  try {
    await checkExistingDataBase();
    await models.sequelize.sync({ logging: false });
  } catch (err) {
    throw new Error(err.toString());
  }
};
export default connectDataBase;
