const { booking } = require('../api/index');
const bookingData = require('../utils/bookingData.json');

const { validBookingData, incompleteBookingData } = bookingData;

describe('Create a booking', () => {
  it('should create a booking and return the booking details and ID', async () => {
    const response = await booking.createBooking(validBookingData);
    
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.data).toHaveProperty('bookingid');
  });

  it('should fail to create a booking with missing required fields', async () => {
    const response = await booking.createBooking(incompleteBookingData);

    expect(response.status).toBe(500);
    expect(response.headers['content-type']).toBe('text/plain; charset=utf-8');
    expect(response.data).toContain('Internal Server Error');
  });
});