const axios = require('axios');

const baseUrl = 'https://restful-booker.herokuapp.com';

describe('Auth endpoint', () => {
  it('should return a token for valid credentials', async () => {
    expect(process.env.VALID_USERNAME).toEqual('admin');
  });

  it('should return "Bad credentials" error for invalid credentials, but with 200 status', async () => {

  });
})