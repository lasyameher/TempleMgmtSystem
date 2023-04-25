import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Eventcalendar } from '@mobiscroll/react-lite';
//import { getEvents } from '..utils/api'; // import function to fetch events data

function Calendar() {
  // const [events, setEvents] = useState([]); // state to hold events data
  // const [selectedDate, setSelectedDate] = useState(new Date()); // state to hold selected date

  // // function to fetch events data on component mount and update state
  // useEffect(() => {
  //   async function fetchEvents() {
  //     try {
  //       const eventsData = await getEvents();
  //       setEvents(eventsData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchEvents();
  // }, []);

  // // function to handle event click
  // const onEventClick = (event) => {
  //   console.log(event);
  // };

  return (
    <div>
      <Navbar />

      {/* <div className="container mx-auto px-4 py-2">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex items-center justify-between py-2 px-6">
            <div className="text-lg font-bold text-gray-800">{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
          </div>
          <Eventcalendar
            data={events}
            view={{
              calendar: { type: 'month' },
              eventList: { type: 'day' }
            }}
            onEventClick={onEventClick}
            selectedDate={selectedDate}
            onChange={(event) => setSelectedDate(event.date)}
            responsive={{ small: { view: { calendar: { type: 'day' } } } }}
            theme="ios"
            themeVariant="light"
          />
        </div>
      </div>
      <Footer /> */}
    </div>
  );
}

export default Calendar;
