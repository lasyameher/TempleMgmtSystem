import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Contact() {
    return (
        <div className="bg-orange-300 min-h-screen">
            <Navbar />
            <div className="mt-10 ml-10 max-w-5xl bg-orange-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-1xl px-2 py-1 font-bold bg-orange-400 rounded-t-lg tracking-tight text-gray-900 dark:text-white">Contact Us </h5>
                </a>
                <ul className="max-w-5xl space-y-1 px-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li className="text-gray-500 dark:text-gray-400">
                        Email: {" "}
                        <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">contact@omkaartemple.org</a>{" "}
                    </li>
                    <li>Phone : *Please be advised that e-mail is currently the best method of contact.- 260-623-0001 (Limited Availability)</li>
                    <li>US Postal Address: Omkaar Temple14745 Yellow River RoadFort Wayne, IN 46818.</li>
                    <li className="text-gray-500 dark:text-gray-400">
                        <a href="https://www.google.com/maps/place/Omkaar+Temple/@41.117634,-85.3362499,17z/data=!4m14!1m7!3m6!1s0x8815de98058d4389:0xbacc97d8d7f4dbaa!2sOmkaar+Temple!8m2!3d41.117634!4d-85.333675!16s%2Fg%2F1q5bm99pl!3m5!1s0x8815de98058d4389:0xbacc97d8d7f4dbaa!8m2!3d41.117634!4d-85.333675!16s%2Fg%2F1q5bm99pl" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Open in Google Maps</a>{" "}
                    </li>
                    <li className="text-gray-500 dark:text-gray-400">
                        <a href="https://maps.apple.com/?address=14745%20Yellow%20River%20Rd,%20Fort%20Wayne,%20IN%20%2046818,%20United%20States&auid=18339372791188327544&ll=41.115716,-85.333863&lsp=9902&q=Omkaar%20Temple" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">Open in Apple Maps</a>{" "}
                    </li>
                    <li> Please be aware Google Maps and some GPS units list us as in "Columbia City."This is the same physical location.</li>
                </ul>
            </div>


            <div className="mt-10 ml-10 max-w-5xl bg-orange-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-1xl px-2 py-1 bg-orange-400 rounded-t-lg font-bold tracking-tight text-gray-900 dark:text-white">Directions to Temple from I-69</h5>
                </a>
                <ol className="pl-5 mt-2 px-2 space-y-1 list-decimal list-inside">
                    <li>On I-69 take Exit 109B</li>
                    <li>Continue on US-30 W for 7.5 mi</li>
                    <li>Turn left onto W County Line Road, sign reads CO LINE RD. (look for Marathon Gas Station on Left) - 0.6 m</li>
                    <li>Turn left onto Yellow River Rd - 0.2 mi</li>
                    <li>Temple is on the right, follow gravel drive.</li>
                </ol>
            </div>

            <div className="absolute top-52 right-0 h-96 mt-0 mr-8">
        <div className="max-w-sm max-h-xl mx-10 bg-orange-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-auto">
          <a href="#">
            <h1 className="text-1xl flex-center px-4 py-2 bg-orange-400 rounded-t-lg font-bold mt-0 ml-0">Signup for Omkar Temple's Newsletter</h1>
          </a>
          <br></br>
          <form className="px-4 py-2">
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