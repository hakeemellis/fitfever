import React from 'react';
import Header from './header';

// Import video files using an absolute path
import woMp4 from '../';
import woWebm from '/assets/videos/wo.webm';
import woOgv from '/assets/videos/wo.ogv';

const Home = () => {
  return (
    <div>
      <Header />

      {/* Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0" 
         autoPlay muted loop>
          <source src={woMp4} type="video/mp4" />
          <source src={woWebm} type="video/webm" />
          <source src={woOgv} type="video/ogg" />
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
