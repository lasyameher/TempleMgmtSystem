import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Axios from "axios";
import { useState } from "react";
export default function UserRegister() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [role, setRole] = useState("");
    const registerUser = (e) => {
        e.preventDefault();
        console.log("function called")
        Axios.post("http://localhost:3000/api/users/RegisterUser", {
            "name": name,
            "address": address,
            "email": email,
            "password": password,
            "phoneno": phoneNo,
            "role" : role,
        }).then((response) => {
            alert("User Added Successfully")
        });
    }
    return (
        <div className="bg-orange-300 min-h-screen">
            <Navbar />

            <div class="flex items-center justify-center flex-col">
                <div class="flex justify-center w-80 bg-orange-100 rounded-lg shadow dark:border mt-6 w-96 dark:bg-gray-800 dark:border-gray-700">
                    <div class="bg-orange-100 px-6 py-8 rounded shadow-md text-black w-full">
                        <form>
                            <h1 class="mb-8 text-3xl font-bold text-center">Add New User</h1>
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
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="phoneno"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                placeholder="Role" />
                            <button
                                onClick={(e) => registerUser(e)}
                                class="w-full text-white bg-primary-600 bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add User</button>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}