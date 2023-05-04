import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function AddAppointment() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/users/getUsers")
      .then((response) => {
        const list = response.data.response;

        setUserList(list)

        console.log(list)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const navigate = useNavigate();
  const [appointmentReason, setAppointmentReason] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [priestId, setPriestId] = useState("");
  const [description, setDescription] = useState("");
  //const [status, setStatus] = useState("");
  //const [userDetails, setUserDetails] = useState("");

  const addAppointment = (e) => {
    e.preventDefault();
    console.log("function called")
    Axios.post("http://localhost:3000/api/appointments/AddAppointment", {
      "appointmentReason": appointmentReason,
      "appointmentDate": appointmentDate,
      "priestId": priestId,
      "description": description,
      "status": "Requested",
      "userId": JSON.parse(sessionStorage.getItem('userId')),
    }).then((response) => {
      console.log(response)
      alert("Appointment added Successfully")
      navigate('/Appointments');
    });
  }

  return (
    <div className='bg-orange-300 min-h-screen'>
      <Navbar />

      <div class="flex items-center justify-center">
        <div className="flex justify-center w-80 bg-orange-100 rounded-lg shadow dark:border mt-6 w-96 dark:bg-gray-800 dark:border-gray-700">
          <form className="w-80">
            <h1 class="text-xl font-bold flex items-center justify-center mt-2 py-2 mb-6 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Add an Appointment
            </h1>
            <div className="mb-6">

              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Appointment Reason
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reason"
                required
                value={appointmentReason}
                onChange={(e) => setAppointmentReason(e.target.value)} />
            </div>
            <div className="mb-6">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <div>
              <label for="Priest" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priest</label>
              <select value={priestId} onChange={(e) => setPriestId(e.target.value)} id="Priest" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>select one</option>
                {
                  userList.map(user => (
                    user.role === "Priest" ?
                      <option value={user._id} key={user._id}>{user.name}</option>
                      :
                      null
                  ))
                }
              </select>
            </div>

            <button
              type="button"
              onClick={addAppointment}
              className="text-white bg-blue-700 mt-6 mb-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );

}
