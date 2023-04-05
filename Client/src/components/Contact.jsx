import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className="mt-10 ml-10 max-w-5xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Us </h5>
                </a>
                <ul className="max-w-5xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li className="text-gray-500 dark:text-gray-400">
                        Email: {" "}
                        <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">contact@omkaartemple.org</a>{" "}
                    </li>
                    <li>Phone : *Please be advised that e-mail is currently the best method of contact.- 260-623-0001 (Limited Availability)</li>
                    <li>US Postal Address: Omkaar Temple14745 Yellow River RoadFort Wayne, IN 46818.</li>
                    <li className="text-gray-500 dark:text-gray-400">
                        <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Open in Google Maps</a>{" "}
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Open in Apple Maps</a>{" "}
                    </li>
                    <li> Please be aware Google Maps and some GPS units list us as in "Columbia City."This is the same physical location.</li>
                </ul>
            </div>


            <div className="mt-10 ml-10 max-w-5xl p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Directions to Temple from I-69</h5>
                </a>
                <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside">
                    <li>On I-69 take Exit 109B</li>
                    <li>Continue on US-30 W for 7.5 mi</li>
                    <li>Turn left onto W County Line Road, sign reads CO LINE RD. (look for Marathon Gas Station on Left) - 0.6 m</li>
                    <li>Turn left onto Yellow River Rd - 0.2 mi</li>
                    <li>Temple is on the right, follow gravel drive.</li>
                </ol>
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
    );

}