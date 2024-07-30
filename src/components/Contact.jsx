// //import React from 'react'
// // const Contact = () => {
// //   return (
// //     <div className="contact-info">
// //     <h2>Contact Us</h2>
// //     <p>Email: contact@eventorganizer.com</p>
// //     <p>Phone: +123 456 7890</p>
// //   </div>
// //   )
// // }

// // export default Contact
// src/components/Contact.js

// import React from 'react';
// import './Contact.css';
// import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

// function Contact() {
//   return (
//     <div className="contact">
//       <h2>Contact Us</h2>
//       <p>Email: contact@eventorganizer.com</p>
//       <p>Phone: +123 456 7890</p>
//       <div className="social-media-icons">
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <FaInstagram className="icon instagram" />
//         </a>
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//           <FaFacebook className="icon facebook" />
//         </a>
//         <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
//           <FaWhatsapp className="icon whatsapp" />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;
// src/components/Contact.js

import React from 'react';
import './Contact.css';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Email: contact@eventorganizer.com</p>
      <p>Phone: +123 456 7890</p>
      <div className="social-media-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
