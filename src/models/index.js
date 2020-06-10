import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';
import Sequelize from 'sequelize';

dotenv.config();

const basename = path.basename(__filename);

const models = {};
const sequelize = new Sequelize(
  process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
);

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
