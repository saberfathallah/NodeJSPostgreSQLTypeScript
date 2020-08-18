/* eslint-disable @typescript-eslint/camelcase */
import models from '../../models';

const getPostsByUser = async (req, res) => {
  try {
    const posts = await models.Post.findAll({
      where: { user_id: req.userId },
    });
    return res.status(200).json({ error: null, posts });
  } catch (error) {
    return res.status(500).json({ posts: null, error });
  }
};

export default getPostsByUser;
