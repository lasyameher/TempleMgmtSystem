import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import EditUser from './EditUser';
export default function UserList() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/api/users/GetUsers")
    .then((response) => {
        const allUsers = response.data.response;
        
        setUserList(allUsers)
        
        // console.log(items)
    })
    .catch(error => {
        console.log(error)
    })
  }, [])

  return userList.map((user)=>(
      
    <tr class="bg-orange-100 dark:bg-gray-800">
      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {user.name}
      </th>
      <td class="px-6 py-4">
          {user.role}
      </td>
      <td class="px-6 py-4">
          {user.address}
      </td>
      <td class="px-6 py-4">
          {user.phoneno}
      </td>
      <td class="px-6 py-4">
          {user.email}
      </td>
      <td class="px-6 py-4">
          <EditUser user = {user}/>
      </td>
    </tr>  

    ))
}
