require('dotenv/config');

module.exports = {
  secret: process.env.APP_SECRET,
  expiresIn: process.env.EXPIRES_IN,
};
