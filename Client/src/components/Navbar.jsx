import React from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../images/omkarbanner.png";


export default function Navbar() {
  const userId = sessionStorage.getItem('userId')
  const role = sessionStorage.getItem('role')
  const name = sessionStorage.getItem('name')
  const navigate = useNavigate();

  const logout =() =>{
  sessionStorage.clear();
  navigate('/');
  }
  //console.log(role);

  if(userId != null)
  {
    if(role === "\"devotee\"")
    {
      return (
        <>
        <div>
    <div id="banner">
  <img src={banner} className="w-full h-28" alt="Omkaar Temple" />
    </div>

      {/* NAVIGATION HERE PHP */}
      <nav className="flex items-center justify-between flex-wrap p-2 bg-orange-100 border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600">
        <ul className="flex justify-evenly w-full">
          <li className="mr-3">
            <Link to={'/'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Home</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Mission'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Mission</Link>
          </li>
          <li>
          <Link to={'/Priest'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Priest</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Services'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Services</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Calendar'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Calendar</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Gallery'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Gallery</Link>
          </li>
          <li className="mr-3">
          <Link to={'/LiveStream'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Live Stream</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Donations'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Donations</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Contact'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Contact</Link>
          </li>
          <li>
          <Link to={'/Appointments'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Appointment</Link>          
          </li>
          <li>
          <Link onClick={logout} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
      </>
      );
      
    }
    else if(role === "\"Priest\"")
    {
      return (
      <>
      
        <div>
    <div id="banner">
  <img src={banner} className="w-full h-28" alt="Omkaar Temple" />
    </div>

      {/* NAVIGATION HERE PHP */}
      <nav className="flex items-center justify-between flex-wrap p-2 bg-orange-100 border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600">
        <ul className="flex justify-evenly w-full">
          <li className="mr-3">
            <Link to={'/'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Home</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Mission'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Mission</Link>
          </li>
          <li>
          <Link to={'/Priest'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Priest</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Services'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Services</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Calendar'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Calendar</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Gallery'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Gallery</Link>
          </li>
          <li className="mr-3">
          <Link to={'/LiveStream'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Live Stream</Link>
          </li>
          <li>
          <Link to={'/Appointments'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Manage Appointments</Link>          
          </li>
          <li>
          <Link onClick={logout} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
      
      </>
      );
      
    }
    else 
    {
      return(
        <>
        <div>
    <div id="banner">
  <img src={banner} className="w-full h-28" alt="Omkaar Temple" />
    </div>

      {/* NAVIGATION HERE PHP */}
      <nav className="flex items-center justify-between flex-wrap p-2 bg-orange-100 border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600">
        <ul className="flex justify-evenly w-full">
          <li className="mr-3">
            <Link to={'/'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Home</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Mission'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Mission</Link>
          </li>
          <li>
          <Link to={'/Priest'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Priest</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Services'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Services</Link>
          </li>          
          <li className="mr-3">
          <Link to={'/Gallery'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Gallery</Link>
          </li>
          <li className="mr-3">
          <Link to={'/LiveStream'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Live Stream</Link>
          </li>
          <li>
          <Link to={'/Users'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Users</Link>          
          </li>
          <li>
          <Link to={'/Events'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Events</Link>          
          </li>
          <li>
          <Link onClick={logout} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
      </>
      );
    }
  }
  else 
  {
    return (
      <>
        <div>
    <div id="banner">
  <img src={banner} className="w-full h-28" alt="Omkaar Temple" />
    </div>

      {/* NAVIGATION HERE PHP */}
      <nav className="flex items-center justify-between flex-wrap p-2 bg-orange-100 border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600">
        <ul className="flex justify-evenly w-full">
          <li className="mr-3">
            <Link to={'/'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Home</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Mission'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Mission</Link>
          </li>
          <li>
          <Link to={'/Priest'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Priest</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Services'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Services</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Calendar'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Calendar</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Gallery'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Gallery</Link>
          </li>
          <li className="mr-3">
          <Link to={'/LiveStream'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Live Stream</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Donations'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Donations</Link>
          </li>
          <li className="mr-3">
          <Link to={'/Contact'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Contact</Link>
          </li>
          <li>
          <Link to={'/Login'} style={{ borderLeft: "none" }}
              href="../index.php"
              className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Login</Link>          
          </li>
        </ul>
      </nav>
    </div>
      </>
    );
  }
}