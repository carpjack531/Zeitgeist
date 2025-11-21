import React from 'react'; 

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen font-sans">
            <h1 className="text-4xl">About Us</h1>
            <p className="mt-4">Here at QuantamEvolution(QE), we are dedicated to pushing the boundaries of technology and innovation. 
            Our mission is to create cutting-edge solutions that empower individuals and businesses to thrive in the digital age.
            Founded in 2025, This is our project for INFO5103 Managing Software Projects: Applied 2. 
            </p>
            <p className="text-4xl">What is this project about?</p>
            <p className="mt-4">The Zeitgeist Tone Calculator Website (or simply Zeitgeist) 
                is a web application designed to analyze the emotional tone from the multiple headlines across the world wide web.
                By using data scraping and artificial intelligence, Zeitgeist provides users with insights into the prevailing sentiments on various topics,
                helping them stay informed and make better decisions.
            </p>
            <p className="text-4xl">Who are QuantamEvolution (QE) comprised of?</p>
            <p className="mt-4">QuantamEvolution (QE) is made up of six dedicated members:
                Abdulrahman Abu Samra, Hesham El-Ghussein, Jack Carpenter, Jordan Forestell, Sam Faseruk, and Yoseff Abu Dayeh.

            </p>
             <a href="/" className="text-center text-blue-600 font-semibold">Return to home screen</a>
        </div>
    );
};

export default AboutUs;
