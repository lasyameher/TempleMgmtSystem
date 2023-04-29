import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";
import basket from "../images/basket.png";
import donate from "../images/Donate.jpeg";
import { useNavigate } from "react-router-dom";


export default function Donations() {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

function addToCart() {
  const amountInput = document.getElementById("amount");
  if (amountInput.value) {
    setCartCount(cartCount + 1);
    // code to add item to cart
  } else {
    alert("Please enter an amount before adding to cart.");
  }
}
  return (
    <div>
      <Navbar />
      <div className="relative">
        <button onClick={() => navigate("/Checkout")}>
        <img className="w-30 h-20 mr-0 rounded-t-lg absolute top-0 right-0" src={basket} alt />
        {cartCount > 0 && (
        <div className="absolute top-3 right-6 inline-flex items-center justify-center px-2 py-1 ml-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {cartCount}
        </div>
        )}
        </button>
      </div>

      <div className="mt-20 ml-5 mb-20 mr-5 max-w-fit p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-1xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Omkaar Temple is a Non-Profit Organization and all donations are tax deductible</h5>
        </a>
        <h1 className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">
          Thank you for considering to donate to Omkaar Temple. The building of Omkaar Temple is truly an undertaking of epic proportions and a donation of any amount goes a long way.
          The growth of the Temple as well as associated religious activities depends greatly upon the generous donations of devotees like you. Thank you again for helping our community realize its collective dream for Omkaar Temple.</h1>
        <h1 className="mb-3 font-normal text-right text-gray-700 dark:text-gray-400">- Omkaar Temple Administration</h1>
        <br></br>

        <div className="max-w-fit space-x-2 mb-10 flex flex-row bg-white">
          <div className="border border-gray-200 rounded-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={donate} alt />
            <div className="p-5">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">One Time Donations</h5>
              <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">via Credit Card, Bank Transfer, or PayPal</p>
              <br></br>

              <div className="mb-6">
                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" required>Amount</label>
                <input
                  type="text"
                  id="amount"
                  placeholder="$"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required />
              </div>

              <a onClick={addToCart} href="#" className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

          </div>

          <div className="border border-gray-200 rounded-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={donate} alt />
            <div className="p-5">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Monthly Donations</h5>
              <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">via Credit Card, Bank Transfer, or PayPal</p>
              <br></br>

              <div className="mb-6">
                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" required>Amount</label>
                <input
                  type="text"
                  id="amount"
                  placeholder="$"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required />
              </div>

              <a onClick={addToCart} href="#" className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

          </div>

          <div className="border border-gray-200 rounded-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={donate} alt />
            <div className="p-5">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Cultural Activities Donations</h5>
              <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">via Credit Card, Bank Transfer, or PayPal</p>
              <br></br>

              <div className="mb-6">
                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" required>Amount</label>
                <input
                  type="text"
                  id="amount"
                  placeholder="$"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required />
              </div>

              <a onClick={addToCart} href="#" className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

          </div>

          <div className="border border-gray-200 rounded-lg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={donate} alt />
            <div className="p-5">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Food Donations</h5>
              <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">via Credit Card, Bank Transfer, or PayPal</p>
              <br></br>

              <div className="mb-6">
                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" required>Amount</label>
                <input
                  type="text"
                  id="amount"
                  placeholder="$"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required />
              </div>

              <a onClick={addToCart} href="#" className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
