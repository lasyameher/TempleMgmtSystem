import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function UserRegister() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const registerUser = (e) => {
        e.preventDefault();
        console.log("function called")
        Axios.post("http://localhost:3001/api/users/RegisterUser", {
            "name": name,
            "address": address,
            "email": email,
            "password": password,
            "phoneno": phoneNo,
        }).then((response) => {
            alert("Registration Successful")
            navigate('/SignUp')
        });
    }
    return (
        <div>
            <Navbar />

            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <form>


                            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name" />

                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Address" />
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="phoneno"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                placeholder="Phone Number" />
                            <button
                                onClick={(e) => registerUser(e)}
                                class="w-full text-white bg-primary-600 bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Account</button>

                            <div class="text-grey-dark mt-6">
                                Already have an account?
                                <Link to={'/SignUp'}> Login</Link>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );

}