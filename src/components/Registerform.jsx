

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import './Registerform.css';

// function Registerform() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
  
//   const navigate = useNavigate(); // Initialize navigate hook

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !confirmPassword) {
//       setErrorMessage('Please fill in all fields.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }
//     if (email === 'test@example.com') {
//       setErrorMessage('Email already registered.');
//     } else {
//       setErrorMessage('');
//       alert('Registration successful!');
//       navigate('/'); // Navigate to homepage after successful registration
//     }
//   };

//   const handleSocialLogin = (url) => {
//     window.location.href = url;
//   };

//   return (
//     <div className="register-form">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm your password"
//             required
//           />
//         </div>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//         <button type="submit">Register</button>
//       </form>
//       <div className="separator">or continue with</div>
//       <div className="social-login">
//         <button className="google" onClick={() => handleSocialLogin('https://accounts.google.com/o/oauth2/auth')}>Google</button>
//         <button className="apple" onClick={() => handleSocialLogin('https://appleid.apple.com/auth/authorize')}>Apple</button>
//         <button className="facebook" onClick={() => handleSocialLogin('https://www.facebook.com/v2.5/dialog/oauth')}>Facebook</button>
//       </div>
//       <p className="terms">
//         By signing in or creating an account, you agree with{' '}
//         <a href="/terms">Terms & Conditions</a> and{' '}
//         <a href="/privacy">Privacy Policy</a>.
//       </p>
//       <p className="login">
//         Already have an account? <a href="/login">Log in</a>
//       </p>
//     </div>
//   );
// }

// export default Registerform;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registerform.css';

function Registerform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    if (email === 'test@example.com') {
      setErrorMessage('Email already registered.');
    } else {
      setErrorMessage('');
      alert('Registration successful!');
      navigate('/'); // Navigate to homepage after successful registration
    }
  };

  const handleSocialLogin = (url) => {
    window.location.href = url;
  };

  return (
    <div className="register-form-container">
      <video className="background-video" autoPlay loop muted>
        <source src="loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Register</button>
        </form>
        <div className="separator">or continue with</div>
        <div className="social-login">
          <button className="google" onClick={() => handleSocialLogin('https://accounts.google.com/o/oauth2/auth')}>Google</button>
          <button className="apple" onClick={() => handleSocialLogin('https://appleid.apple.com/auth/authorize')}>Apple</button>
          <button className="facebook" onClick={() => handleSocialLogin('https://www.facebook.com/v2.5/dialog/oauth')}>Facebook</button>
        </div>
        <p className="terms">
          By signing in or creating an account, you agree with{' '}
          <a href="/terms">Terms & Conditions</a> and{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>
        <p className="login">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Registerform;
