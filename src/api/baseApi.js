const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

class BaseApi {
  constructor(basePath = '') {
    this.basePath = basePath;
    this.instance = axios.create({
      baseURL: process.env.BASE_URL,
      validateStatus: function (status) {
        return status >= 200 && status < 599;
      },
    });
  }
}

 module.exports = BaseApi;