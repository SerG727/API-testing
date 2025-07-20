const BaseApi = require('./baseApi');

class BookingApi extends BaseApi {
  constructor() {
    super('booking');
  }

  async createBooking(bookingData) {
    const response = await this.instance.post(
      `${this.basePath}`,
      bookingData,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    );

    return response;
  }

  async getBookingById(id) {
    const response = await this.instance.get(
      `${this.basePath}/${id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    );

    return response;
  }

  async deleteBooking(id, token) {
    const response = await this.instance.delete(
      `${this.basePath}/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `token=${token}`
        },
      }
    )

    return response;
  }

  async updateBooking(id, token, bookingData) {
    const response = await this.instance.put(
      `${this.basePath}/${id}`,
      bookingData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${token}`
        },
      }
    )

    return response;
  }

  async patchBooking(id, token, bookingData) {
    const response = await this.instance.patch(
      `${this.basePath}/${id}`,
      bookingData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${token}`
        },
      }
    )

    return response;
  }
}

module.exports = BookingApi;