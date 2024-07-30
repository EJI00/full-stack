
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Loginform from './components/Loginform';
import Registerform from './components/Registerform';
import EventList from './components/EventList';
import EventDetails from './components/EventOrganizers';
import About from './components/About';
import Contact from './components/Contact';
import BookOrganizer from './components/BookOrganizer';
import PaymentPage from './components/PaymentPage'; // Import the PaymentPage component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/login" element={<Loginform onLogin={handleLogin} />} />
            <Route path="/register" element={<Registerform />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookorganizer" element={<BookOrganizer />} />
            <Route path="/payment" element={<PaymentPage />} /> {/* Add the payment route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

