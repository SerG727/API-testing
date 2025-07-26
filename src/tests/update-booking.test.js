const { booking, auth } = require('../api/index');
const bookingData = require('../utils/bookingData.json');
const { validUsername, validPassword } = require('../../envConfig');

const { validBookingData, fullUpdateBookingData, partialUpdateBookingData } = bookingData;
let bookingId;
let token;

beforeAll(async () => {
  const authResponse = await auth.createToken(validUsername, validPassword);

  token = authResponse.data.token;
});

beforeEach(async () => {
  const newBooking = await booking.createBooking(validBookingData);

  bookingId = newBooking.data.bookingid;
});

describe('Update booking', () => {
  it('should fully update an existing booking with new data', async () => {
    const response = await booking.updateBooking(bookingId, token, fullUpdateBookingData);

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.data).toEqual(fullUpdateBookingData);
  });

  it('should successfully update the first name and last name of an existing booking', async () => {
    const response = await booking.patchBooking(bookingId, token, partialUpdateBookingData);

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.data).toMatchObject(partialUpdateBookingData);
  });

  it('should fail to update an existing booking without authorization and return 403 status', async () => {
    const response = await booking.updateBooking(bookingId, null, fullUpdateBookingData);

    expect(response.status).toBe(403);
    expect(response.headers['content-type']).toBe('text/plain; charset=utf-8');
    expect(response.data).toContain('Forbidden');
  });
})