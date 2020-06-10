import models from '../../models';

const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    return res.status(200).json({ error: null, users });
  } catch (error) {
    return res.status(500).json({ users: null, error });
  }
};

export default getAllUsers;
