
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export default (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    level: DataTypes.STRING,
  }, {});
  Category.associate = (models) => {
    Category.hasMany(models.Post, { onDelete: 'cascade', hooks: true });
  };
  return Category;
};
