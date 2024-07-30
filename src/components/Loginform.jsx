
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Loginform.css';

// // const users = [
// //   {
// //     id: '47c7',
// //     name: 'EJI',
// //     email: 'eji@gmail.com',
// //     password: 'oppo'
// //   },
// //   {
// //     id: '10fa',
// //     name: 'HAASHINI',
// //     email: 'haasu@gmail.com',
// //     password: 'oppo'
// //   },
// //   {
// //     id: '9442',
// //     name: 'KESAV',
// //     email: 'kesav@gmail.com',
// //     password: 'oppo'
// //   }
// // ];

// // function Loginform() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!email || !password) {
// //       setErrorMessage('Please fill in both fields.');
// //       return;
// //     }

// //     const user = users.find((user) => user.email === email && user.password === password);

// //     if (user) {
// //       setErrorMessage('');
// //       alert('Login successful!');
// //       // Add your logic here to handle successful login, like navigating to another page
// //       navigate('/');
// //     } else {
// //       setErrorMessage('Invalid email or password.');
// //     }
// //   };

// //   return (
// //     <div className="page-container">
// //       <div className="login-container">
// //         <video autoPlay muted loop className="background-video">
// //           <source src={`${process.env.PUBLIC_URL}/homeBg.mp4`} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //         <div className="login-form">
// //           <h2>LOGIN</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div>
// //               <label htmlFor="email">Email:</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="Enter your email"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="password">Password:</label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 placeholder="Enter your password"
// //                 required
// //               />
// //             </div>
// //             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
// //             <button type="submit">Login</button>
// //           </form>
// //           <div className="login-options">
// //             <p className="create-account">
// //               Don't have an account? <a href="/register">Create an account</a>
// //             </p>
// //             <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
// //             <a onClick={() => navigate('/')} className="back">Back</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Loginform;

// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Loginform.css';

// // const users = [
// //   {
// //     id: '47c7',
// //     name: 'EJI',
// //     email: 'eji@gmail.com',
// //     password: 'oppo'
// //   },
// //   {
// //     id: '10fa',
// //     name: 'HAASHINI',
// //     email: 'haasu@gmail.com',
// //     password: 'oppo'
// //   },
// //   {
// //     id: '9442',
// //     name: 'KESAV',
// //     email: 'kesav@gmail.com',
// //     password: 'oppo'
// //   }
// // ];

// // function Loginform() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!email || !password) {
// //       setErrorMessage('Please fill in both fields.');
// //       return;
// //     }

// //     const user = users.find((user) => user.email === email && user.password === password);

// //     if (user) {
// //       setErrorMessage('');
// //       alert('Login successful!');
// //       // Navigate to book organizer page
// //       navigate('/bookorganizer');
// //     } else {
// //       setErrorMessage('Invalid email or password.');
// //     }
// //   };

// //   return (
// //     <div className="page-container">
// //       <div className="login-container">
// //         <video autoPlay muted loop className="background-video">
// //           <source src={`${process.env.PUBLIC_URL}/homeBg.mp4`} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //         <div className="login-form">
// //           <h2>LOGIN</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div>
// //               <label htmlFor="email">Email:</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="Enter your email"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="password">Password:</label>
// //               <input
// //                 type="password"
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 placeholder="Enter your password"
// //                 required
// //               />
// //             </div>
// //             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
// //             <button type="submit">Login</button>
// //           </form>
// //           <div className="login-options">
// //             <p className="create-account">
// //               Don't have an account? <a href="/register">Create an account</a>
// //             </p>
// //             <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
// //             <a onClick={() => navigate('/')} className="back">Back</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Loginform;
// // Loginform.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Loginform.css';
// import axios from 'axios';

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

// function Loginform({ onLogin }) {

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
//     if (email === 'test@example.com' && password === 'password') {
//       setErrorMessage('');
//       onLogin();
//       navigate(-1); // Navigate back to the previous page
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
//             <button type="submit"><a href='/bookorganizer'>Login</a></button>
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginform.css';

const users = [
  {
    id: '47c7',
    name: 'EJI',
    email: 'eji@gmail.com',
    password: 'oppo'
  },
  {
    id: '10fa',
    name: 'HAASHINI',
    email: 'haasu@gmail.com',
    password: 'oppo'
  },
  {
    id: '9442',
    name: 'KESAV',
    email: 'kesav@gmail.com',
    password: 'oppo'
  }
];

function Loginform({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setErrorMessage('');
      alert('Login successful!');
      // Add your logic here to handle successful login, like navigating to another page
      navigate('/bookorganizer');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <video autoPlay muted loop className="background-video">
          <source src={`${process.env.PUBLIC_URL}/homeBg.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="login-form">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button type="submit">Login</button>
          </form>
          <div className="login-options">
            <p className="create-account">
              Don't have an account? <a href="/register">Create an account</a>
            </p>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            <a onClick={() => navigate('/')} className="back">Back</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginform;

