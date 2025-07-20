const BaseApi = require('./baseApi');

class AuthApi extends BaseApi {
  constructor() {
    super('auth');
  }

  async createToken(username, password) {
    const response = await this.instance.post(
      `${this.basePath}`, {
        username,
        password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );

    return response;
  }
}

module.exports = AuthApi;