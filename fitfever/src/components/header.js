import React, { useState, useEffect } from 'react';
import CartIcon from './CartIcon'; // Import the CartIcon component
import './header.css'; // Import the CSS file
import './shop'

const Header = () => {
  
  const [isSticky, setIsSticky] = useState(false); //Both variables are false (because of the state set) until you make one true.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 767);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check and update the screen size
  const checkScreenSize = () => {
    setIsMobileScreen(window.innerWidth <= 767);
  };

  useEffect(() => {
    // Add an event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className={`fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-black header-transition' : 'bg-transparent header-transition'} text-white`}>
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold px-7">Fit Fever</h1>
            </div>

            {/* Hamburger Mobile Menu Button */}
            <button className="md:hidden absolute right-10" onClick={toggleMobileMenu}>
              {/* Replace with your SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-7 w-7 text-white cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>

            {/* Render the mobile menu only for small screens */}
            {isMobileScreen && isMobileMenuOpen && (
              <div className="md:hidden absolute top-16 right-4 bg-black p-4 rounded-md shadow-md">
                {/* Mobile menu content */}
                <a href="#" className="block my-2 hover:text-gray-300">Home</a>
                <a href="#" className="block my-2 hover:text-gray-300">Shop</a>
                <a href="#" className="block my-2 hover:text-gray-300">About</a>
                <a href="#" className="block my-2 hover:text-gray-300">Contact</a>
                /

                {/* Include Cart and Login components */}
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
            )}

            {/* Render the desktop menu only for large screens */}
            {!isMobileScreen && (
              <nav className="space-x-4 hidden md:block">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">Shop</a>
                <a href="#" className="hover:text-gray-300">About</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
              </nav>
            )}

            {/* Conditionally render Cart and Login components for desktop screens */}
            {!isMobileScreen && (
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
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
