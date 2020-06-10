import models from '../../models';
import validateUser from '../../utils/validateUser';

const getUserDetails = async (req, res) => {
  validateUser(req, res);
  const { userid } = req.headers;
  try {
    const user = await models.User.findOne({
      where: { id: userid },
    });

    return res.status(200).json({ error: null, user });
  } catch (error) {
    return res.status(200).json({ error, user: null });
  }
};

export default getUserDetails;
