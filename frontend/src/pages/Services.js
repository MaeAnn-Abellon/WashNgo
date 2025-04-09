import React, { useState, useEffect } from 'react';
import BookingModal from '../components/BookingModal'; // Import the modal component
import '../styles/Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [notification, setNotification] = useState(''); // Notification message state

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleBook = (serviceId) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true); // Open the modal when a service is selected
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleBookingSuccess = () => {
    setNotification('Booking successful!'); // Show notification
    setIsModalOpen(false); // Close the modal after success

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="services-container">
      <h2>Our Laundry Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p><strong>₱{service.price}</strong></p>
            <button onClick={() => handleBook(service.id)}>Book Now</button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <BookingModal
          serviceId={selectedServiceId}
          onClose={handleCloseModal}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
};

export default Services;
