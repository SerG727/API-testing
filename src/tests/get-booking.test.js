const { booking, auth } = require('../api/index');
const bookingData = require('../utils/bookingData.json');
const { validUsername, validPassword } = require('../../envConfig');

const { validBookingData } = bookingData;
let bookingId;

beforeAll(async () => {
  const authResponse = await auth.createToken(validUsername, validPassword);
  const response = await booking.createBooking(validBookingData);

  token = authResponse.data.token;
  bookingId = response.data.bookingid;
});

describe('Get bookings', () => {
  it('should return booking details for a valid booking ID', async () => {
    const response = await booking.getBookingById(bookingId);
    
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.data).toEqual(validBookingData);
  });

  it('should return 404 for a non-existent booking ID', async () => {
    await booking.deleteBooking(bookingId, token);

    const response = await booking.getBookingById(bookingId);

    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toBe('text/plain; charset=utf-8');
    expect(response.data).toContain('Not Found');
  });
})