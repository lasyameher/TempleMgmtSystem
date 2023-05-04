import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function EditAppointment(props) {
  const appointment = props.appointment;
  const [showModal, setShowModal] = React.useState(false);
  const [appointmentId, setAppointmentId] = useState(appointment._id)
  const [appointmentReason, setAppointmentReason] = useState(appointment.appointmentReason);
  const [appointmentDate, setAppointmentDate] = useState(appointment.appointmentDate);
  const [priestId, setPriestId] = useState(appointment.priestId);
  const [description, setDescription] = useState(appointment.description);
  const [status, setStatus] = useState(appointment.status);
  const [userId, setUserId] = useState(appointment.userId)

  const date = formatDate(appointmentDate);
  

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth(date) + 1;
    const day = date.getDate(date);
    const year = date.getFullYear(date);
    return `${month}/${day}/${year}`;
  }
  
  

  const editAppointment = (e) => {
    e.preventDefault();
    console.log("function called")
    Axios.post("http://localhost:3000/api/appointments/UpdateAppointment", {
      "appointmentId": appointmentId,
      "appointmentReason": appointmentReason,
      "appointmentDate": appointment.appointmentDate,
      "priestId": priestId,
      "description": description,
      "status": status,
      "userId": userId,
    }).then((response) => {
      alert("Appointment updated Successfully")

      window.location.reload();
    });
  }
  return (
    <>
      <button
        className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit Appointment
      </button>
      {showModal ? (
        <>
          <form> 
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >

              <div className="fixed w-96 m-4 max-w-5xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-orange-100 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 bg-orange-400 w-96 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl text-black font-bold">
                      Edit Appointment
                    </h3>

                  </div>
                  {/*body*/}
                  <div className='ml-4'>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm ml-2 mt-4 font-medium text-gray-900 dark:text-white"
                    >
                      Appointment Reason
                    </label>
                    <input
                      disabled readonly
                      type="text"
                      id="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Reason"
                      required
                      value={appointmentReason}
                      onChange={(e) => setAppointmentReason(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm ml-2 font-medium text-gray-900 dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      disabled readOnly
                      type="text"
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={date}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm ml-2 font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="message" rows="4" class="block px-2 py-3 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm ml-2 font-medium text-gray-900 dark:text-white"
                    >
                      Status
                    </label>
                    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>select one</option>
                      <option value="Approved">Approved</option>
                      <option value="Declined">Declined</option>
                    </select>
                  </div>
                  </div>


                  {/*footer*/}
                  <div className='flex items-center justify-center bg-orange-100'>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-900 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={editAppointment}
                    >
                      Save Changes
                    </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </form>
        </>
      ) : null}
    </>
  );
}
