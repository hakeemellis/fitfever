import React, { useState, useEffect } from 'react';
import CartIcon from './CartIcon'; // Import the CartIcon component
import './header.css'; // Import the CSS file


const Header = () => {

    // State to track if the header should be sticky and change color
    const [isSticky, setIsSticky] = useState(false);

    // Function to handle scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  
    // Add an event listener to the window when the component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div>
        
      {/* Transparent Header */}
          <header className={`fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-black header-transition' : 'bg-transparent header-transition'} text-white`}>
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
            <a href="#" className="hover:text-gray-300 px-5 relative mr-1">
            <span className="ml-1">Login</span>
            </a>
            </div>
          </div>
        </div>
      </header>

    </div>
  );
};

export default Header;