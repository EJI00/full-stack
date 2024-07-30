import React from 'react';
import './EventList.css';

function EventList() {
  // Sample event data
  const events = [
    {
      title: 'Event Title 1',
      date: 'July 30, 2024',
      location: 'New York City',
      description: 'Join us for an exciting event featuring live performances and more!',
      imageUrl: `${process.env.PUBLIC_URL}/images/event1.jpg`,
    },
    {
      title: 'Event Title 2',
      date: 'August 5, 2024',
      location: 'Los Angeles',
      description: 'Experience workshops and talks from industry leaders.',
      imageUrl: `${process.env.PUBLIC_URL}/images/event2.jpg`,
    },
    {
      title: 'Event Title 3',
      date: 'August 15, 2024',
      location: 'Chicago',
      description: 'Don’t miss this opportunity to connect with other enthusiasts.',
      imageUrl: `${process.env.PUBLIC_URL}/images/event3.jpg`,
    },
  ];

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      <div className="event-cards">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.imageUrl} alt={event.title} />
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
