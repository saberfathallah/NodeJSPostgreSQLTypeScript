
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  User.associate = (models) => {
    User.hasMany(models.Post, { onDelete: 'cascade', hooks: true });
  };
  return User;
};
