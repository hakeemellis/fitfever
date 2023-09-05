import React from 'react';
import Header from './header';


const Home = () => {

  return (
    <div>
      <Header />
      
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
