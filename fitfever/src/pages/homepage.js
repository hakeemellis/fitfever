import React from 'react';
import Home from '../components/home'; // Import the correct component
import ProductCatalog from '../components/ProductCatalog';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Home /> {/* Render the entire Home component */}
      <ProductCatalog />
    </div>
  );
};

export default HomePage;

