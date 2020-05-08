
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Post, { onDelete: 'cascade', hooks: true });
  };
  return User;
};
