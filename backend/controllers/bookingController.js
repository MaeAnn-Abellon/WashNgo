// controllers/bookingController.js
const { Booking, Service } = require('../models');

const createBooking = async (req, res) => {
  const { name, phone, serviceId, address, kilo, note, price } = req.body;

  try {
    // Check if the service exists
    const service = await Service.findByPk(serviceId);
    if (!service) {
      return res.status(400).json({ message: 'Service not found' });
    }

    // Create a new booking
    const booking = await Booking.create({
      name,
      phone,
      serviceId,
      address,
      kilo,
      note,
      price,
    });

    res.status(201).json({
      message: 'Booking created successfully',
      booking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createBooking,
};
