const axios = require('axios');
const { baseUrl } = require('../../envConfig');

class BaseApi {
  constructor(basePath = '') {
    this.basePath = basePath;
    this.instance = axios.create({
      baseURL: baseUrl,
      validateStatus: function (status) {
        return status >= 200 && status < 599;
      },
    });
  }
}

module.exports = BaseApi;