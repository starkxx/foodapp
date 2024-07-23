import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-slate-600 mb-4">About Us</h1>
        <p className="text-base text-slate-600">
          Welcome to our Grocery and Food Delivery App! We aim to provide you with the best service and the freshest products right to your doorstep.
        </p>
        <p className="mt-2 text-green-600">More details will be added soon...</p>
      </div>
    </div>
  );
};

export default About;
