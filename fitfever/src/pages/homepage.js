import React from 'react';
import Home from '../components/home'; // Import the correct component

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Home /> {/* Render the entire Home component */}
    </div>
  );
};

export default HomePage;

