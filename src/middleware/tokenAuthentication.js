const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenAuthenticated = async (req, res, next) => {
  try {
    const jwtToken = req.header('token');

    if (!jwtToken) {
      return res.status(403).send('Unauthorized');
    }

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET_TOKEN);

    req.admin = payload.admin;
  } catch (err) {
    console.error(err.message);
    return res.status(403).json('Unauthorized');
  }
};

module.exports = tokenAuthenticated;
