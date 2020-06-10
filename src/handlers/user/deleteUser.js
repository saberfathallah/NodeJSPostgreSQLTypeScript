import models from '../../models';

async function deleteUser(req, res) {
  const { email } = req.body;
  try {
    const user = await models.User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: 'cannot found user' });
    }

    await models.User.destroy({
      where: { email },
    });

    return res.status(200).json({ error: null, user });
  } catch (error) {
    return res.status(500).json({ user: null, error });
  }
}

export default deleteUser;
