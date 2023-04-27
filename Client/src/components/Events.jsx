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
    const [eventName, setEventName] = useState({ eventName: "", eventStartDate: "", eventEndDate: "", descriptions: "", status: "" });
    const [eventStartDate, setEventStartDate] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");
    const [descriptions, setDescription] = useState("");
    const [status, setStatus] = useState("");

    const [allEvents, setAllEvents] = useState([]);
  
    const handleAddEvent = (e) => {
        e.preventDefault();
        console.log("function called")
        Axios.post("http://localhost:3000/api/events/AddEvent", {
            "eventName": eventName,
            "eventStartDate": eventStartDate,
            "eventEndDate": eventEndDate,
            "descriptions": descriptions,
            "status": "Added",
        }).then((response) => {
            alert("Event Added Successfully")
        });
    }

    useEffect(() => {
        Axios.get("http://localhost:3000/api/events/GetEvents")
        .then((response) => {
            const events = response.data.response;
            
            setAllEvents(events)
            
            // console.log(items)
        })
        .catch(error => {
            console.log(error)
        })
      }, [])
    
  // handleAddEvent
    return (
      <div>
        <Navbar />
        <div className="mb-20">
        
        <div className="flex flex-col items-center py-2">
          <div className="flex flex-row space-x-10 mt-4 z-20">
            <input type="text" placeholder="Add Title" style={{ width: "150%", marginRight: "10px" }} value={eventName} onChange={(e) => setEventName(e.target.value)} />
            <DatePicker className="p-5" placeholderText="Start Date" style={{ marginRight: "10px" }} selected={eventStartDate} onChange={(e) => setEventStartDate(e.target.value)} />
            <DatePicker className="p-5" placeholderText="End Date" selected={eventEndDate} onChange={(e) => setEventEndDate(e.target.value)} />
            <input type="textarea" placeholder="Add Title" style={{ width: "150%", marginRight: "10px" }} value={descriptions} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit" onClick={handleAddEvent} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style={{ width: "100%" }}>Add Event</button> 
          </div>
        </div>
          <div>
            <Calendar className="relative" localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
          </div>
        </div>
        <Footer />
      </div>
    );
}
