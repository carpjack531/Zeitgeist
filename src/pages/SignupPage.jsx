import Header from '../comps/Header';
import test from "../assets/test.jpg"
import React, { useState, useEffect } from 'react';
const SignupPage = () =>{
  
    return (
    //Just a wrapper for components that maintains flex flow
    <div className="min-h-screen bg-gray-100 flex flex-col  py-20 justify-center items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-center text-3xl font-extrabold mb-5 ">Sign Up</h1>
            <a href="/login" className="text-center text-blue-600 font-semibold">or log into existing account</a>
        </div>
        <div className= "mx-auto max-w-xl rounded-xl shadow-xl p-20 mt-5 mb-15 items-center bg-white justify-center font-arimo"> 
                <div className="mx-auto text-center">
                      <label for="username" className="block font-semibold  text-start">Username</label>
                    <input id="username" type="username"  className="w-full  p-2 rounded-md bg-gray-200  focus:bg-gray-50 mb-5"/>
                    <label for="email" className="block font-semibold  text-start">Email</label>
                    <input id="email" type="email"  className="w-full  p-2 rounded-md bg-gray-200  focus:bg-gray-50 mb-5"/>
                    <label for="password" className="block font-semibold text-start">Password</label>
                    <input id="password" type="password" className="w-full p-2 rounded-md bg-gray-200 focus:bg-gray-50 mb-5"/>
                    <input type="submit" className="w-full mt-5 rounded-sm p-2 hover:bg-blue-400 bg-purple-300"/>
                </div>
        </div>
            <a href="/" className="text-center text-blue-600 font-semibold">Return to home screen</a>
    </div>
    )
};

export default SignupPage;