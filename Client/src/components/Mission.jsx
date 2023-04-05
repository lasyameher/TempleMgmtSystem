import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Mission(){
    return(
      <div>
        <Navbar/>
          <div className="mt-10 ml-10 max-w-5xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Our Mission</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        To establish and build a Hindu Temple in Fort Wayne, IN, USA to worship, conduct religious activities and pursue Hindu tradition and 
        culture. To organize and share religious, cultural, philosophical, yogic, educational and other aspects of Hindu religion and tradition on an ongoing basis for all years to come.
        </p>
      </div>

      <div className="mt-10 ml-10 max-w-5xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Our Vision</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        To build and maintain a Hindu Temple with multiple Deities specifically with Panchamukha Shiva Lingam and Sri Venkateshwara as the main Deities. 
        Other Deities include: Raja Ganapthi, Murugan, Parvathi, Padmavathi, Sri Ram Parivar, Hanuman, Nava Grahas, Sri Krishna and Radha. 
        All built with equal prominence per Hindu tradition.
        </p>
      </div>

      <div className="mt-10 ml-10 max-w-5xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Our Purpose</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        To promote inter-religious, social and cultural understanding and to support humanitarian causes.
        </p>
      </div>

      <div className="absolute top-52 right-0 h-96 mt-12 mr-8">
        <div className="max-w-sm max-h-xl mx-10 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-auto">
          <a href="#">
            <h1 className="text-1xl flex-center font-bold mt-0 ml-3">TEMPLE HOURS AND ADDRESS</h1>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">HOURS:</h5>
            <div>
              <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                <li className="flex flex-col">Monday - Friday:
                  <div className="ml-32">
                    <h1>9:30AM - 11:00AM</h1>
                    <h1>5:30PM - 8:00PM</h1>
                  </div>
                </li>
                <li className="flex flex-col">Saturday - Sunday:
                  <div className="ml-32">
                    <h1>9:30AM - 12:00PM</h1>
                    <h1>5:30PM - 8:00PM</h1>
                  </div>
                </li>
                <li>Abhishekam @ 6PM</li>
                <li>Aarthi @ 6:30PM</li>
                <li className="flex flex-col">Address:
                  <div className="ml-24">
                    <h1>Omkar Temple, 14745</h1>
                    <h1>Yellow River Rd,</h1>
                    <h1>Fort Wayne, IN 46818.</h1>
                  </div>
                </li>
              </ul>
            </div>


          </p>
        </div>
      </div>
        <Footer/>
      </div>  
    )
}