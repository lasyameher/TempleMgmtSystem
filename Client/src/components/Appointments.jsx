import React from 'react'
import AddAppointment from './AddAppointment'
import AppointmentList from './AppointmentList'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
//import { useState } from 'react'



export default function Appointments() {
  const navigate = useNavigate();
  const role = JSON.parse(sessionStorage.getItem('role'))
  const makeNewAppointment =() =>{
  navigate('/AddAppointment');
  }
    if(role === 'devotee')
    {
      return (
        <div>
        <Navbar />
        <button type="button" onClick={makeNewAppointment} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Make An Appointment</button>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Appointment Reason
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <AppointmentList />
          </tbody>
        </table>
      </div>
      <Footer />
      </div>
      )
    }
    else
    {
      return (
        <div>
        <Navbar />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Appointment Reason
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Requested By
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <AppointmentList />
          </tbody>
        </table>
      </div>
      <Footer />
      </div>
      )
    }
    
}
