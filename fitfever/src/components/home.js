import React from 'react';
import Header from './header';

const Home = () => {
  return (
    <div>
      <Header />

      {/* Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0" 
         autoPlay muted loop>
          <source src="/assets/videos/wo.mp4" type="video/mp4" />
          <source src="/assets/videos/wo.webm" type="video/webm" />
          <source src="/assets/videos/wo.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-950 opacity-70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-white flex flex-col items-center justify-center h-full">
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

