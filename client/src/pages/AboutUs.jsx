import React from 'react';
import Header from '../comps/Header';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-pastel-purple-200 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
            <Header />
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 sm:p-12 mt-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">About Us</h1>
                
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Here at QuantamEvolution(QE), we are dedicated to pushing the boundaries of technology and innovation. 
                            Our mission is to create cutting-edge solutions that empower individuals and businesses to thrive in the digital age.
                            Founded in 2025, this is our project for INFO5103 Managing Software Projects: Applied 2. 
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">What is this project about?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The Zeitgeist Tone Calculator Website (or simply Zeitgeist) is a web application designed to analyze the emotional tone from multiple headlines across the world wide web.
                            By using data scraping and artificial intelligence, Zeitgeist provides users with insights into the prevailing sentiments on various topics,
                            helping them stay informed and make better decisions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-2">Who are QuantamEvolution (QE)?</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            QuantamEvolution (QE) is made up of six dedicated members:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                            {[
                                "Abdulrahman Abu Samra",
                                "Hesham El-Ghussein",
                                "Jack Carpenter",
                                "Jordan Forestell",
                                "Sam Faseruk",
                                "Yoseff Abu Dayeh"
                            ].map(name => (
                                <div key={name} className="bg-pastel-purple-100 p-4 rounded-lg shadow-sm">
                                    <p className="font-semibold text-gray-700">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <a href="/" className="text-center text-blue-600 font-semibold mt-8">Return to home screen</a>
        </div>
    );
};

export default AboutUs;
