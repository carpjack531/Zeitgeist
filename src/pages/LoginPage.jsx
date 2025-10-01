import Header from '../comps/Header';
import test from "../assets/test.jpg"
import React, { useState, useEffect } from 'react';

const LoginPage = () =>{
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    return (
    //Just a wrapper for components that maintains flex flow
    <div className="max-w-screen-xl flex mx-20 my-10 sm:mx-0 sm:my-0 justify-center flex-1 ">
        <div className= "flex flex-1 bg-white justify-center font-arimo"> 
            <div className="flex flex-col mt-12 items-center">
                <div className="mx-auto max-w-xs text-center">
                    <h1 className="text-3xl xl:text-3xl font-bold mb-9 ">Sign In</h1>
                    <input type="email"  className="w-full ml-2 p-2 rounded-md bg-gray-300  focus:bg-gray-50 mb-5" placeholder="Username"/>
                    <input type="password" className="w-full ml-2 p-2 rounded-md bg-gray-300 focus:bg-gray-50 mb-5"  placeholder="Password"/>
                    <input type="submit" className="w-1/2 mt-5 rounded-sm p-2 hover:bg-blue-400 bg-blue-300"/>
                </div>
            </div>
        </div>
        <div className="flex flex-1 bg-red-500">
            if<
                <img src={test}></img>
        </div>
    </div>
    )
};

export default LoginPage;