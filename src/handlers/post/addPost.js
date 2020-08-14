/* eslint-disable @typescript-eslint/camelcase */
import models from '../../models';
import validateUser from '../../utils/validateUser';

const addPost = async (req, res) => {
  validateUser(req, res);
  try {
    const { description, category_id } = req.body;
    const { userid } = req.headers;
    const post = await models.Post.create({ description, category_id, user_id: userid });
    return res.status(200).json({ error: null, post });

  } catch (error) {
    return res.status(500).json({ post: null, error });
  }
};

export default addPost;
