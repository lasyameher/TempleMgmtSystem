import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Services() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mt-5 ml-10">Services</h1>
      <div className="mt-10 ml-10 max-w-5xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Special Events Services</h5>
        </a>
        <p className="text-gray-500 dark:text-gray-400">
          Special Events Calendar can be found{" "}
          <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">here</a>{" "}
        </p>
        <br></br>
        <h6 className="text-1xl font-bold dark:text-white">"By Request" Services:</h6>
        <ul className="mb-3 p-2 font-normal text-gray-700 list-disc dark:text-gray-400">
          <li>The following "by request" services can be performed at either the Temple or at a location of the devotees choosing. </li>
          <li>Donation for services performed away from Temple site (e.g. Warsaw, IN): $201.00Donation for services performed at Temple listed below. </li>
        </ul>
        <p className="text-gray-500 dark:text-gray-400">
          For Scheduling{" "}
          <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Login</a>{" "}
        </p>
        <br></br>
        <h6 className="text-1xl font-bold dark:text-white">Yantra Pooja:</h6>
        <p className="text-gray-500 dark:text-gray-400">
          A very special service that is performed in honor of the{" "}
          <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Yantras</a>{" "}
          (WikiLink).
        </p>

      </div>

      <div className="absolute top-52 right-0 h-96 mt-12 mr-8">
        <div className="max-w-sm max-h-xl mx-10 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-auto">
          <a href="#">
            <h1 className="text-1xl flex-center font-bold mt-0 ml-3">Signup for Omkar Temple's Newsletter</h1>
          </a>
          <br></br>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" required>Your email</label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
            </div>
            <div className="mb-6">
              <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" required>First Name</label>
              <input
                type="text"
                id="firstname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required/>
            </div>
            <div className="mb-6">
              <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
              <input
                type="text"
                id="lastname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  )
}