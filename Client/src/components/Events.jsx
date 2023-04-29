import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  
  
export default function Events() {
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3000/api/events/GetEvents")
        .then((response) => {
            const events = response.data.response;
            
            setAllEvents(events)
            
            console.log(allEvents)
        })
        .catch(error => {
            console.log(error)
        })
      }, [])
    
  // handleAddEvent
  return (
      
    <div>
        <div>
        <Calendar className="relative" localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    </div>
    );
}
