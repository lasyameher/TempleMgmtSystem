import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EditAppointment from './EditAppointment';

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
  
  const navigate = useNavigate();
  const editAppointment = (appointmentId) => {
    navigate(`/EditAppointment/${appointmentId}`);
    sessionStorage.setItem('appointmentId',appointmentId);
  }

  if(role === "Priest")
  {
    return appointmentList.map((appointment)=>(
      appointment.priestId === JSON.parse(sessionStorage.getItem('userId')) ?
      
        
      <tr class="bg-orange-100">
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
        <EditAppointment appointment = {appointment} />
            
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
      
        
      <tr className="bg-orange-100">
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
      </tr>  
        :
      <tr>
          
      </tr>
      ))
  }
  
  }

