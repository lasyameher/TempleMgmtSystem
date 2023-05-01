import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="bg-orange-300 min-h-screen">
      <Navbar />
      <h1 className="text-2xl font-bold mt-5 ml-10">Latest News & Events</h1>
      <div className="mt-10 ml-10 max-w-5xl bg-orange-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-1xl bg-orange-400 rounded-t-lg py-1 px-2 font-bold tracking-tight text-gray-900 dark:text-white">February Events 2023</h5>
        </a>
        <p className="mb-3 font-normal px-2 text-gray-700 dark:text-gray-400">
        <b>Monday, February 7th at 9:30AM Abhishekam and at 5:45pm</b> - Karthika Pournami Satyanarayana Pooja followed by Deepothsavam and Jwala Thoranam
<br></br>
        <b>Friday, February 11th at 5:45pm</b> -Sankatahara Chaturthi Pooja
<br></br>
        <b>Monday, February 14th at 5:45pm</b> - Rudrabhishekam & Jyothi Lingarchana followed by Harathi
<br></br>
        <b>Monday, February 21st at 5:45pm</b> - Final Karthika Masam, Shiva Rudrabhishekam followed by Harathi
<br></br>
<br></br>
        Thank you!
        </p>
      </div>

      <div className="mt-10 ml-10 max-w-5xl bg-orange-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-1xl bg-orange-400 rounded-t-lg py-1 px-2 font-bold tracking-tight text-gray-900 dark:text-white">January Events 2023</h5>
        </a>
        <p className="mb-3 font-normal px-2 text-gray-700 dark:text-gray-400">
        <b>Tuesday, January 10th, 2023 at 5:40PM</b> - Sankastahara Chaturthi Pooja
<br></br>
        <b>Saturday, January 14th, 2023 at 10:30AM</b> - Makara Sankranthi. Pongal (festival) Arathi. Special archana sponsorship $10. Ayyappa swami Abhishekam.
<br></br>
<br></br>
        Thank you!

        </p>
      </div>

      <div className="absolute top-52 right-0 h-96 mt-12 mr-8">
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
  )
}