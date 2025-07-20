const AuthApi = require('./authApi');
const BookingApi = require('./bookingApi')

const auth = new AuthApi(),
      booking = new BookingApi();

module.exports = {
  auth,
  booking,
};