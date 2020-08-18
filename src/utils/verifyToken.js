/* eslint-disable @typescript-eslint/explicit-function-return-type */
import jwt from 'jsonwebtoken';

async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    const jwtToken = token.substring(7, token.length);
    const decoded = await jwt.verify(jwtToken, 'jwt_secret');

    req.userId = decoded.id;
    next();

    return null;
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default verifyToken;
