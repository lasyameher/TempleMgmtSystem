import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import UserList from './UserList';
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  //const role = JSON.parse(sessionStorage.getItem('role'))
  const addUser =() =>{
    navigate('/AddUser');
  }

  return (
    
    <div>
        <Navbar />
        <button type="button" onClick={addUser} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New User</button>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <UserList />
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
    
  )
}
