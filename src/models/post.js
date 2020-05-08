
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    description: DataTypes.STRING,
  }, {});
  Post.associate = (models) => {
    Post.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    Post.belongsTo(models.Category, { foreignKey: 'category_id', onDelete: 'CASCADE' });
  };
  return Post;
};
