import React from 'react';
import UserHeader from '../comps/UserHeader.jsx'
const HomePage = () => { 
    return (
        <div className="text-center p-2">
            <UserHeader/>
            <h1>Welcome to Zeitgeist Tone Calculator</h1>
            <p>What the dog doing?</p>
        </div>
    );
};

export default HomePage;