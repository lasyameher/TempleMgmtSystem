import React, {useState} from 'react'
import Axios from 'axios'
import Events from './Events';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AddEvent() {
    const [eventName, setEventName] = useState("");
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

  return (
    <div>
        <Navbar />
        <div className="mb-20">
        
        <div className="flex flex-col items-center py-2">
          <div className="flex flex-row space-x-10 mt-4 z-20">
          <input type="text" placeholder="Event Name" style={{ width: "150%", marginRight: "10px" }} value={eventName} onChange={(e) => setEventName(e.target.value)} />
            <label >From:</label>
            
            <input
            type="date"
            id="date"
            placeholder='Start Date'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={eventStartDate}
            onChange={(e) => setEventStartDate(e.target.value)}
          />
        <label>To:</label>
        <input
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={eventEndDate}
            onChange={(e) => setEventEndDate(e.target.value)}
          />
        
            <input type="text" placeholder="Description" style={{ width: "150%", marginRight: "10px" }} value={descriptions} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit" onClick={handleAddEvent} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style={{ width: "100%" }}>Add Event</button> 
          </div>
        </div>
        <Events />
        <Footer />
    </div>
    </div>
  )
}
