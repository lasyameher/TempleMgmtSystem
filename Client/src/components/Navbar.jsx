import React from "react";
import { Link, useNavigate } from "react-router-dom";
import banner from "../images/om.jpeg";


export default function Navbar() {
  const userId = sessionStorage.getItem('userId')
  const role = sessionStorage.getItem('role')
  const name = sessionStorage.getItem('name')
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    sessionStorage.clear();


  }
  //console.log(role);

  if (userId != null) {
    if (role === "\"devotee\"") {
      return (
        <>
          <div>
            <div className="bg-orange-400 px-52 w-full flex items-center justify-items-center">
              <img className="flex-none rounded-full ml-6 p-2 h-28" src={banner} alt="image description" />
              <div className="flex items-center ml-10 mr-10 justify-center">
                <p className="grow flex items-center justify-end w-96 text-4xl font-bold py-2 font-serif font-style:italic text-red-900">OMKAAR TEMPLE |</p>
                <p className="text-lg font-bold font-serif font-style:italic text-red-900">Hindu Temple of Fort Wayne</p>
                </div>
                <img className="flex-none rounded-full ml-0 p-2 h-28" src={banner} alt="image description" />
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
                  <Link to={'/DisplayLivestream'} style={{ borderLeft: "none" }}
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
                    to="/"
                    className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Logout</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      );

    }
    else if (role === "\"Priest\"") {
      return (
        <>

          <div>
          <div className="bg-orange-400 px-52 w-full flex items-center justify-items-center">
              <img className="flex-none rounded-full ml-6 p-2 h-28" src={banner} alt="image description" />
              <div className="flex items-center ml-10 mr-10 justify-center">
                <p className="grow flex items-center justify-end w-96 text-4xl font-bold py-2 font-serif font-style:italic text-red-900">OMKAAR TEMPLE |</p>
                <p className="text-lg font-bold font-serif font-style:italic text-red-900">Hindu Temple of Fort Wayne</p>
                </div>
                <img className="flex-none rounded-full ml-0 p-2 h-28" src={banner} alt="image description" />
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
                  <Link to={'/AddLivestream'} style={{ borderLeft: "none" }}
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
                    to="/"
                    className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Logout</Link>
                </li>
              </ul>
            </nav>
          </div>

        </>
      );

    }
    else {
      return (
        <>
          <div>
          <div className="bg-orange-400 px-52 w-full flex items-center justify-items-center">
              <img className="flex-none rounded-full ml-6 p-2 h-28" src={banner} alt="image description" />
              <div className="flex items-center ml-10 mr-10 justify-center">
                <p className="grow flex items-center justify-end w-96 text-4xl font-bold py-2 font-serif font-style:italic text-red-900">OMKAAR TEMPLE |</p>
                <p className="text-lg font-bold font-serif font-style:italic text-red-900">Hindu Temple of Fort Wayne</p>
                </div>
                <img className="flex-none rounded-full ml-0 p-2 h-28" src={banner} alt="image description" />
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
                  <Link to={'/DisplayLivestream'} style={{ borderLeft: "none" }}
                    href="../index.php"
                    className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Live Stream</Link>
                </li>
                <li>
                  <Link to={'/Users'} style={{ borderLeft: "none" }}
                    href="../index.php"
                    className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Users</Link>
                </li>
                <li>
                  <Link to={'/AddEvent'} style={{ borderLeft: "none" }}
                    href="../index.php"
                    className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Events</Link>
                </li>
                <li>
                  <Link onClick={logout} style={{ borderLeft: "none" }}
                    to="/"
                    className="block py-2 px-4 text-gray-500 font-semibold hover:text-gray-700">Logout</Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      );
    }
  }
  else {
    return (
      <>
        <div>
        <div className="bg-orange-400 px-52 w-full flex items-center justify-items-center">
              <img className="flex-none rounded-full ml-6 p-2 h-28" src={banner} alt="image description" />
              <div className="flex items-center ml-10 mr-10 justify-center">
                <p className="grow flex items-center justify-end w-96 text-4xl font-bold py-2 font-serif font-style:italic text-red-900">OMKAAR TEMPLE |</p>
                <p className="text-lg font-bold font-serif font-style:italic text-red-900">Hindu Temple of Fort Wayne</p>
                </div>
                <img className="flex-none rounded-full ml-0 p-2 h-28" src={banner} alt="image description" />
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
                <Link to={'/DisplayLivestream'} style={{ borderLeft: "none" }}
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