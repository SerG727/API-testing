require('dotenv').config();


const env = {
  baseUrl: process.env.BASE_URL,
  validUsername: process.env.VALID_USERNAME,
  validPassword: process.env.VALID_PASSWORD,
  invalidUsername: process.env.INVALID_USERNAME,
  invalidPassword: process.env.INVALID_PASSWORD
};

module.exports = env;