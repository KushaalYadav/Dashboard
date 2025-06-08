// src/pages/CalendarPage.jsx
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal } from '../components/Modal'; // You'll create this for input forms

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'KGF 3 Release',
      start: new Date(2025, 5, 10, 10, 0),
      end: new Date(2025, 5, 10, 12, 0),
    },
    {
      id: 2,
      title: 'Shah Rukh Khan Press Meet',
      start: new Date(2025, 5, 15, 14, 0),
      end: new Date(2025, 5, 15, 16, 0),
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectSlot = ({ start, end }) => {
    setSelectedEvent({ start, end, title: '' });
    setModalOpen(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleSave = (eventData) => {
    if (eventData.id) {
      // Editing existing
      setEvents((prev) =>
        prev.map((ev) => (ev.id === eventData.id ? eventData : ev))
      );
    } else {
      // Creating new
      const newEvent = { ...eventData, id: new Date().getTime() };
      setEvents((prev) => [...prev, newEvent]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((ev) => ev.id !== id));
    setModalOpen(false);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">📅 Movie Event Calendar</h2>

      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        className="bg-white dark:bg-gray-800 rounded shadow"
      />

      {modalOpen && (
        <Modal
          event={selectedEvent}
          onSave={handleSave}
          onDelete={handleDelete}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CalendarPage;
