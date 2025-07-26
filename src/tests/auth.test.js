const { auth } = require('../api/index');
const { 
  validUsername,
  validPassword,
  invalidUsername,
  invalidPassword
} = require('../../envConfig');

describe('Auth endpoint', () => {
  it('should return a token for valid credentials', async () => {
    const response = await auth.createToken(validUsername, validPassword);

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.data).toHaveProperty('token');
  });

  it('should return "Bad credentials" error for invalid credentials, but with 200 status', async () => {
    const response = await auth.createToken(invalidUsername, invalidPassword);

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.data).toHaveProperty('reason', 'Bad credentials');
  });
});