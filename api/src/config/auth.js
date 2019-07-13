require('dotenv');

module.exports = {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};
