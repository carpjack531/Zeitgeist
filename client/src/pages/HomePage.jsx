import React, { useState, useEffect } from 'react';
import UserHeader from '../comps/UserHeader.jsx'
const HomePage = () => { 
    
    
    const [dataObj, setDataObj] = useState({})

    useEffect({
        //setDataObj(API.getData());   // the json-obj containing the Moods and headlines returned from the API...
    },[dataObj])
    
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