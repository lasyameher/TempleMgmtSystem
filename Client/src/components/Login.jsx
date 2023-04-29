import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import devotee from "../images/devotee.jpeg";
import priest from "../images/priest.jpeg";
import admin from "../images/admin.jpeg";
import { useNavigate } from "react-router-dom";
export default function Login(){
  const navigateTo = useNavigate();
  
    return(
      <div>
        <Navbar/>
        <div className="flex justify-center max-w-8xl space-x-36  mt-8 mb-10">
    <button onClick= {()=> {navigateTo('/SignUp')}}
      className="rounded-full h-80 w-80 mt-20 ml-20 flex items-center justify-center bg-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
      <img 
        className="rounded-full h-80 w-80 object-cover"
        src={devotee} 
        /> 
    </button>

    <button onClick= {()=> {navigateTo('/SignInForPriestAndAdmin')}}
      className="rounded-full h-80 w-80 mt-20 ml-40 flex items-center justify-center bg-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
      <img 
        className="rounded-full h-80 w-80 object-cover"
        src={priest} 
        />
    </button>

    <button onClick= {()=> {navigateTo('/SignInForPriestAndAdmin')}}
      className="rounded-full h-80 w-80 mt-20 ml-60 flex items-center justify-center bg-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
      <img 
        className="rounded-full h-80 w-80 object-cover"
        src={admin} 
        />
    </button>
</div>
<div class="flex justify-center ml-20">
  <h1 class="text-3xl flex-center font-bold ml-50">Devotee</h1>
  <h1 class="text-3xl flex-center font-bold ml-96">Priest</h1>
  <h1 class="text-3xl flex-center font-bold ml-96">Admin</h1>
</div>
      <Footer/>
      </div> 
    );
}

