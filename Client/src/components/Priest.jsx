import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import priest2 from "../images/Priest2.jpeg";
import priest1 from "../images/priest1.jpeg";

export default function Priest() {
  return (
    <div  className="bg-orange-300 min-h-screen">
      <Navbar />
      <div>
        <div className="mt-10 ml-10 max-w-5xl bg-orange-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-1xl font-bold px-2 py-1 bg-orange-400 rounded-t-lg tracking-tight text-gray-900 dark:text-white">Priest Sri Keshava Kaidala Sampath Kumar</h5>
          </a>
          <ul className="max-w-2xl space-y-1 px-2 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Priest Sri Keshava Kaidala Sampath Kumar joined Omkaar temple on January 1st, 2021.</li>
            <li>Priest Keshava is fluent in Telugu, Kannada, Hindi, and English. </li>
          </ul>
        </div>

        <div className="mt-10 ml-10 max-w-5xl bg-orange-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-1xl font-bold px-2 py-1 bg-orange-400 rounded-t-lg tracking-tight text-gray-900 dark:text-white">Priest Siva Rama Krishna</h5>
          </a>
          <ul className="max-w-2xl space-y-1 px-2 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Priest Siva Rama Krishna joined Omkaar temple recently.</li>
            <li>Priest Rama Krishna is fluent in Telugu, Hindi, and English. </li>
          </ul>
        </div>
        <div className="flex justify-center max-w-7xl space-x-32  mt-10 mb-20">
          <img className="w-64 h-96 object-cover rounded shadow" src={priest1} alt="Image 1" />
          <img className="w-64 h-96 object-cover rounded shadow" src={priest2} alt="Image 2" />
        </div>
        
        <div className="absolute top-52 right-0 h-96 mt-0 mr-8">
        <div className="max-w-sm max-h-xl mx-10 bg-orange-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-auto">
          <a href="#">
            <h1 className="mb-2 text-1xl bg-orange-400 rounded-t-lg px-4 py-2 font-bold tracking-tight text-gray-900 dark:text-white">TEMPLE HOURS AND ADDRESS</h1>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <div>
              <ul className="max-w-md space-y-1 text-gray-500 p-4 list-none list-inside dark:text-gray-400">
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
      <Footer />
    </div>
    </div>
  )
}