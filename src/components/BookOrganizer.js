// // // import React, { useState } from 'react';
// // // import './BookOrganizer.css';

// // // const organizers = [
// // //   { 
// // //     name: 'John Doe', 
// // //     email: 'john@example.com', 
// // //     phone: '+123 456 7890',
// // //     events: 'Marriage, Birthday Parties',
// // //     description: 'Experienced in organizing large-scale marriage events and fun-filled birthday parties.',
// // //     rating: 3.8
// // //   },
// // //   { 
// // //     name: 'Jane Smith', 
// // //     email: 'jane@example.com', 
// // //     phone: '+123 456 7891',
// // //     events: 'Event OrganizersCorporate Events, Conferences',
// // //     description: 'Specializes in organizing corporate events and professional conferences.',
// // //     rating: 4.4
// // //   },
// // //   // Add the rest of the organizers here...
// // // ];

// // // function BookOrganizer() {
// // //   const [selectedOrganizer, setSelectedOrganizer] = useState('');
// // //   const [eventName, setEventName] = useState('');
// // //   const [eventDate, setEventDate] = useState('');
// // //   const [confirmationMessage, setConfirmationMessage] = useState('');

// // //   const handleBooking = () => {
// // //     if (selectedOrganizer && eventName && eventDate) {
// // //       setConfirmationMessage(`You have successfully booked ${selectedOrganizer} for your ${eventName} event on ${eventDate}.`);
// // //     } else {
// // //       setConfirmationMessage('Please fill in all fields.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="book-organizer-container">
// // //       <h2>Book an Organizer</h2>
// // //       <form>
// // //         <label htmlFor="organizer">Select Organizer:</label>
// // //         <select id="organizer" value={selectedOrganizer} onChange={(e) => setSelectedOrganizer(e.target.value)}>
// // //           <option value="">--Select an Organizer--</option>
// // //           {organizers.map((organizer, index) => (
// // //             <option key={index} value={organizer.name}>{organizer.name}</option>
// // //           ))}
// // //         </select>

// // //         <label htmlFor="event-name">Event Name:</label>
// // //         <input
// // //           type="text"
// // //           id="event-name"
// // //           value={eventName}
// // //           onChange={(e) => setEventName(e.target.value)}
// // //         />

// // //         <label htmlFor="event-date">Event Date:</label>
// // //         <input
// // //           type="date"
// // //           id="event-date"
// // //           value={eventDate}
// // //           onChange={(e) => setEventDate(e.target.value)}
// // //         />

// // //         <button type="button" onClick={handleBooking}>Book Now</button>
// // //       </form>
// // //       {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
// // //     </div>
// // //   );
// // // }

// // // export default BookOrganizer;
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // import './BookOrganizer.css';

// // const organizers = [
// //   { 
// //     name: 'John Doe', 
// //     email: 'john@example.com', 
// //     phone: '+123 456 7890',
// //     events: 'Marriage, Birthday Parties',
// //     description: 'Experienced in organizing large-scale marriage events and fun-filled birthday parties.',
// //     rating: 3.8
// //   },
// //   { 
// //     name: 'Jane Smith', 
// //     email: 'jane@example.com', 
// //     phone: '+123 456 7891',
// //     events: 'Corporate Events, Conferences',
// //     description: 'Specializes in organizing corporate events and professional conferences.',
// //     rating: 4.4
// //   },
// //   // Add the rest of the organizers here...
// // ];

// // function BookOrganizer() {
// //   const [selectedOrganizer, setSelectedOrganizer] = useState('');
// //   const [eventName, setEventName] = useState('');
// //   const [eventDate, setEventDate] = useState('');
// //   const [confirmationMessage, setConfirmationMessage] = useState('');
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleBooking = () => {
// //     if (selectedOrganizer && eventName && eventDate) {
// //       setConfirmationMessage(`You have successfully booked ${selectedOrganizer} for your ${eventName} event on ${eventDate}.`);
// //       // Navigate to payment page
// //       navigate('/payment');
// //     } else {
// //       setConfirmationMessage('Please fill in all fields.');
// //     }
// //   };

// //   return (
// //     <div className="book-organizer-container">
// //       <h2>Book an Organizer</h2>
// //       <form>
// //         <label htmlFor="organizer">Select Organizer:</label>
// //         <select id="organizer" value={selectedOrganizer} onChange={(e) => setSelectedOrganizer(e.target.value)}>
// //           <option value="">--Select an Organizer--</option>
// //           {organizers.map((organizer, index) => (
// //             <option key={index} value={organizer.name}>{organizer.name}</option>
// //           ))}
// //         </select>

// //         <label htmlFor="event-name">Event Name:</label>
// //         <input
// //           type="text"
// //           id="event-name"
// //           value={eventName}
// //           onChange={(e) => setEventName(e.target.value)}
// //         />

// //         <label htmlFor="event-date">Event Date:</label>
// //         <input
// //           type="date"
// //           id="event-date"
// //           value={eventDate}
// //           onChange={(e) => setEventDate(e.target.value)}
// //         />

// //         <button type="button" onClick={handleBooking}>Book Now</button>
// //       </form>
// //       {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
// //     </div>
// //   );
// // }

// // export default BookOrganizer;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BookOrganizer.css';

// // Sample data for organizers
// const organizers = [
//   { 
//     name: 'John Doe', 
//     email: 'john@example.com', 
//     phone: '+123 456 7890',
//     events: 'Marriage, Birthday Parties',
//     description: 'Experienced in organizing large-scale marriage events and fun-filled birthday parties.',
//     rating: 3.8
//   },
//   { 
//     name: 'Jane Smith', 
//     email: 'jane@example.com', 
//     phone: '+123 456 7891',
//     events: 'Corporate Events, Conferences',
//     description: 'Specializes in organizing corporate events and professional conferences.',
//     rating: 4.4
//   },
//   // Add more organizers as needed
// ];

// function BookOrganizer() {
//   const [selectedOrganizer, setSelectedOrganizer] = useState('');
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [confirmationMessage, setConfirmationMessage] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate authentication status
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Simulate authentication check
//     const authStatus = localStorage.getItem('isAuthenticated'); // or any other method to check authentication
//     if (authStatus !== 'true') {
//       navigate('/login');
//     } else {
//       setIsAuthenticated(true);
//     }
//   }, [navigate]);

//   const handleBooking = () => {
//     if (selectedOrganizer && eventName && eventDate) {
//       setConfirmationMessage(`You have successfully booked ${selectedOrganizer} for your ${eventName} event on ${eventDate}.`);
//       // Navigate to payment page
//       navigate('/payment');
//     } else {
//       setConfirmationMessage('Please fill in all fields.');
//     }
//   };

//   return (
//     isAuthenticated && (
//       <div className="book-organizer-container">
//         <h2>Book an Organizer</h2>
//         <form>
//           <label htmlFor="organizer">Select Organizer:</label>
//           <select id="organizer" value={selectedOrganizer} onChange={(e) => setSelectedOrganizer(e.target.value)}>
//             <option value="">--Select an Organizer--</option>
//             {organizers.map((organizer, index) => (
//               <option key={index} value={organizer.name}>{organizer.name}</option>
//             ))}
//           </select>

//           <label htmlFor="event-name">Event Name:</label>
//           <input
//             type="text"
//             id="event-name"
//             value={eventName}
//             onChange={(e) => setEventName(e.target.value)}
//           />

//           <label htmlFor="event-date">Event Date:</label>
//           <input
//             type="date"
//             id="event-date"
//             value={eventDate}
//             onChange={(e) => setEventDate(e.target.value)}
//           />

//           <button type="button" onClick={handleBooking}>Book Now</button>
//         </form>
//         {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
//       </div>
//     )
//   );
// }

// export default BookOrganizer;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './BookOrganizer.css';

// function BookOrganizer() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [selectedOrganizer, setSelectedOrganizer] = useState(location.state?.organizer || {});
//   const [eventName, setEventName] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [confirmationMessage, setConfirmationMessage] = useState('');
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate authentication status

//   useEffect(() => {
//     // Simulate authentication check
//     const authStatus = localStorage.getItem('isAuthenticated'); // or any other method to check authentication
//     if (authStatus !== 'true') {
//       navigate('/login');
//     } else {
//       setIsAuthenticated(true);
//     }
//   }, [navigate]);

//   const handleBooking = () => {
//     if (selectedOrganizer.name && eventName && eventDate) {
//       setConfirmationMessage(`You have successfully booked ${selectedOrganizer.name} for your ${eventName} event on ${eventDate}.`);
//       // Navigate to payment page
//       navigate('/payment');
//     } else {
//       setConfirmationMessage('Please fill in all fields.');
//     }
//   };

//   return (
//     isAuthenticated && (
//       <div className="book-organizer-container">
//         <h2>Book an Organizer</h2>
//         <form>
//           <label htmlFor="organizer">Selected Organizer:</label>
//           <input
//             type="text"
//             id="organizer"
//             value={selectedOrganizer.name || ''}
//             readOnly
//           />

//           <label htmlFor="event-name">Event Name:</label>
//           <input
//             type="text"
//             id="event-name"
//             value={eventName}
//             onChange={(e) => setEventName(e.target.value)}
//           />

//           <label htmlFor="event-date">Event Date:</label>
//           <input
//             type="date"
//             id="event-date"
//             value={eventDate}
//             onChange={(e) => setEventDate(e.target.value)}
//           />

//           <button type="button" onClick={handleBooking}>Book Now</button>
//         </form>
//         {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
//       </div>
//     )
//   );
// }

// export default BookOrganizer;
// BookOrganizer.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookOrganizer.css';

function BookOrganizer() {
  const [selectedOrganizer, setSelectedOrganizer] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus !== 'true') {
      navigate('/BookOrganizer');
    }
  }, [navigate]);

  const handleBooking = () => {
    if (selectedOrganizer && eventName && eventDate) {
      setConfirmationMessage(`You have successfully booked ${selectedOrganizer} for your ${eventName} event on ${eventDate}.`);
      navigate('/payment'); 
    } else {
      setConfirmationMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="book-organizer-container">
      <h2>Book an Organizer</h2>
      <form>
        <label htmlFor="organizer">Select Organizer:</label>
        <input
          type="text"
          id="organizer"
          value={selectedOrganizer}
          onChange={(e) => setSelectedOrganizer(e.target.value)}
        />

        <label htmlFor="event-name">Event Name:</label>
        <input
          type="text"
          id="event-name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <label htmlFor="event-date">Event Date:</label>
        <input
          type="date"
          id="event-date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />

        <button type="button" onClick={handleBooking}>Book Now</button>
      </form>
      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
    </div>
  );
}

export default BookOrganizer;
// Loginform.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Loginform.css';

// const users = [
//   {
//     id: '47c7',
//     name: 'EJI',
//     email: 'eji@gmail.com',
//     password: 'oppo'
//   },
//   {
//     id: '10fa',
//     name: 'HAASHINI',
//     email: 'haasu@gmail.com',
//     password: 'oppo'
//   },
//   {
//     id: '9442',
//     name: 'KESAV',
//     email: 'kesav@gmail.com',
//     password: 'oppo'
//   }
// ];

// function Loginform() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setErrorMessage('Please fill in both fields.');
//       return;
//     }

//     const user = users.find((user) => user.email === email && user.password === password);

//     if (user) {
//       setErrorMessage('');
//       alert('Login successful!');
//       // Redirect to book organizer page upon successful login
//       navigate('/bookorganizer');
//     } else {
//       setErrorMessage('Invalid email or password.');
//     }
//   };

//   return (
//     <div className="page-container">
//       <div className="login-container">
//         <video autoPlay muted loop className="background-video">
//           <source src={`${process.env.PUBLIC_URL}/homeBg.mp4`} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="login-form">
//           <h2>LOGIN</h2>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//             <button type="submit">Login</button>
//           </form>
//           <div className="login-options">
//             <p className="create-account">
//               Don't have an account? <a href="/register">Create an account</a>
//             </p>
//             <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
//             <a onClick={() => navigate('/')} className="back">Back</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Loginform;

