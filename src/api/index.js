const AuthApi = require('./authApi');
const BookingApi = require('./bookingApi')

const auth = new AuthApi();
const booking = new BookingApi();

module.exports = {
  auth,
  booking,
};