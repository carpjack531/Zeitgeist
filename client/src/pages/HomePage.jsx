import React from 'react';
import UserHeader from '../comps/UserHeader.jsx';
import {useState, useEffect} from "react"
import {mood} from ".././api/api.js";


const HomePage = () => { 
    useEffect(()=>{
      test();
    },[]);

    const test = async() =>{
      const todaysMood = await(mood.getToday());
      console.log(JSON.stringify(todaysMood));
    }
    return (

        <div className="min-h-screen flex flex-col items-center bg-pastel-purple-300">
            <UserHeader />
            <div className="flex flex-col min-h-150 gap-15 text-center justify-center">
                <p className="font-semibold text-blue-500">Todays current mood is...</p>
                <h1 className="text-9xl font-semibold">Example</h1>
            </div>
        </div>

    );
};

export default HomePage;