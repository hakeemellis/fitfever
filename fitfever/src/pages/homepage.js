import React from 'react';
import Home from '../components/home'; // Import the correct component
import ProductCatalog from '../components/ProductCatalog';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <Home /> {/* Render the entire Home component */}
      <ProductCatalog />
      <Footer />
    </div>
  );
};

export default HomePage;

