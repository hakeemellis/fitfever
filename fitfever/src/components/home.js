import React from 'react';
import CartIcon from '../components/CartIcon'; // Import the CartIcon component


const Home = () => {
  return (
    <div>
      {/* Transparent Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="logo">
              <h1 className="text-2xl font-bold px-7">Fit Fever</h1>
            </div>
            <nav className="space-x-4">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Shop</a>
              <a href="#" className="hover:text-gray-300">About</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </nav>
            <div className="flex items-center">
              <a href="#" className="hover:text-gray-300 px-1 relative">
              <div className="flex items-center">
              <CartIcon />
              <span className="ml-1">Cart</span>
              </div>
              </a>
            <a href="#" className="hover:text-gray-300 px-8 relative">
            <span className="ml-1">Login</span>
            </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gray-950 text-white h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Fit Fever</h1>
          <p className="text-lg">Your ultimate fitness destination</p>
          {/* Add more content here */}
        </div>
      </section>

      {/* The rest of your content */}
    </div>
  );
};

export default Home;
