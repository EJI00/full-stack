// src/components/Homepage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();

  // Event data with images
  const events = [
    {
      title: 'Club parties',
      imageUrl: `${process.env.PUBLIC_URL}event_party1.jpg`,
    },
    {
      title: 'Marriage Events',
      imageUrl: `${process.env.PUBLIC_URL}event_party2.jpg`,
    },
    {
      title: 'Birthday Celebrations',
      imageUrl: `${process.env.PUBLIC_URL}event_party3.jpg`,
    },
  ];

  // Categories with images
  const categories = [
    { name: 'Concerts', identifier: 'concerts', imageUrl: `${process.env.PUBLIC_URL}concerts.jpg` },
    { name: 'Workshops', identifier: 'workshops', imageUrl: `${process.env.PUBLIC_URL}workshops.png` },
    { name: 'Conferences', identifier: 'conferences', imageUrl: `${process.env.PUBLIC_URL}conference.jpg` },
    { name: 'Festivals', identifier: 'festivals', imageUrl: `${process.env.PUBLIC_URL}festi.jpg` },
  ];

  // Handle navigation to the events page
  const handleExploreClick = () => {
    navigate('/events');
  };

  const handleBookNowClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to the Event Organizer Booking Portal</h1>
        <p>Explore upcoming events and book your spot now!</p>
        <button className="cta-button" onClick={handleExploreClick}>Explore Events</button>
      </div>

      {/* Featured Events */}
      <div className="featured-events">
        <h2>Featured Events</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.imageUrl} alt={event.title} />
              <h3>{event.title}</h3>
              <button onClick={() => handleBookNowClick(event.id)}>Book Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Event Categories */}
      <div className="event-categories">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className={`category-card ${category.identifier}`}>
              <img src={category.imageUrl} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-card">
          <p>"This platform made booking events so easy!"</p>
          <p>- Happy Customer</p>
        </div>
        <div className="testimonial-card">
          <p>"Great selection of events and seamless booking process."</p>
          <p>- Satisfied User</p>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter">
        <h2>Stay Updated</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@eventorganizer.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
}

export default Homepage;
