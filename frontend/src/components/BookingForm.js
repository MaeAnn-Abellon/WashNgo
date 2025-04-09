// import React, { useState, useEffect } from 'react';
// import '../styles/bookingModal.css'; // Ensure you have appropriate styles for the modal

// const BookingModal = ({ serviceId, onClose, onBookingSuccess }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [kilo, setKilo] = useState('');
//   const [note, setNote] = useState('');
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     const fetchServiceDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/services/${serviceId}`);
//         const data = await response.json();
//         setPrice(data.price);
//       } catch (error) {
//         console.error('Error fetching service details:', error);
//       }
//     };

//     if (serviceId) {
//       fetchServiceDetails();
//     }
//   }, [serviceId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const bookingData = {
//       name,
//       phone,
//       serviceId,
//       address,
//       kilo,
//       note,
//       price: price * kilo, // Calculate the total price based on kilos
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/bookings', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         onBookingSuccess(); // Notify parent of successful booking
//       } else {
//         alert('Booking failed: ' + data.message);
//       }
//     } catch (error) {
//       console.error('Error submitting booking:', error);
//       alert('Something went wrong!');
//     }
//   };

//   return (
//     <div className="booking-modal">
//       <div className="modal-content">
//         <button className="close-btn" onClick={onClose}>X</button>
//         <h2>Book Your Service</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Your Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label>Phone Number</label>
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />

//           <label>Address</label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />

//           <label>Kilos of Laundry</label>
//           <input
//             type="number"
//             min="1"
//             value={kilo}
//             onChange={(e) => setKilo(e.target.value)}
//             required
//           />

//           <p>Total Price: ₱{price * kilo}</p>

//           <label>Additional Notes</label>
//           <textarea
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             placeholder="Any special instructions?"
//           ></textarea>

//           <button type="submit">Submit Booking</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingModal;
