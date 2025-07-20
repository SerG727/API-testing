const { booking, auth } = require('../api/index');
const bookingData = require('../utils/bookingData.json');

const { validBookingData } = bookingData;
let bookingId;
let token;

beforeAll(async () => {
  const authResponse = await auth.createToken(process.env.VALID_USERNAME, process.env.VALID_PASSWORD);

  token = authResponse.data.token;
});

beforeEach(async () => {
  const newBooking = await booking.createBooking(validBookingData);

  bookingId = newBooking.data.bookingid;
});

describe('Delete a booking', () => {
  it('should delete a booking and return 201 status', async () => {
    const response = await booking.deleteBooking(bookingId, token);
    
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toBe('text/plain; charset=utf-8');

    const deletedBooking = await booking.getBookingById(bookingId);

    expect(deletedBooking.status).toBe(404);
  });

  it('should return a 403 status when attempting to delete a booking without authorization', async () => {
    const response = await booking.deleteBooking(bookingId, null);
    
    expect(response.status).toBe(403);
    expect(response.headers['content-type']).toBe('text/plain; charset=utf-8');
    expect(response.data).toContain('Forbidden');
  });
});