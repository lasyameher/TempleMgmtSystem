import React, { useEffect, useState } from 'react'
import Axios from 'axios';

export default function AppointmentList() {
  const [appointmentList, setAppointmentList] = useState([]);
  const role = JSON.parse(sessionStorage.getItem('role'))
  useEffect(() => {
    Axios.get("http://localhost:3000/api/appointments/GetAppointments")
    .then((response) => {
        const allAppointments = response.data.response;
        
        setAppointmentList(allAppointments)
        
        // console.log(items)
    })
    .catch(error => {
        console.log(error)
    })
  }, [])

  if(role === "Priest")
  {
    return appointmentList.map((appointment)=>(
      appointment.priestId === JSON.parse(sessionStorage.getItem('userId')) ?
      
        
      <tr class="bg-white dark:bg-gray-800">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {appointment.appointmentReason}
        </th>
        <td class="px-6 py-4">
            {appointment.appointmentDate}
        </td>
        <td class="px-6 py-4">
            {appointment.description}
        </td>
        <td class="px-6 py-4">
            {appointment.status}
        </td>
        <td class="px-6 py-4">
            by?
        </td>
        <td class="px-6 py-4">
            <button>Edit</button>
        </td>
      </tr>  
        :
      <tr>
          
      </tr>
      ))
  }
  else
  {
    return appointmentList.map((appointment)=>(
      appointment.userId === JSON.parse(sessionStorage.getItem('userId')) ?
      
        
      <tr class="bg-white dark:bg-gray-800">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {appointment.appointmentReason}
        </th>
        <td class="px-6 py-4">
            {appointment.appointmentDate}
        </td>
        <td class="px-6 py-4">
            {appointment.description}
        </td>
        <td class="px-6 py-4">
            {appointment.status}
        </td>
        <td class="px-6 py-4">
            <button>Edit</button>
        </td>
      </tr>  
        :
      <tr>
          
      </tr>
      ))
  }
  
  }

