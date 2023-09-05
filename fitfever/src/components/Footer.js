import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/hakeem-ellis/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />{/* style={{ color: '#FF5733' }} if color */}
          </a>
          <a href="https://github.com/hakeemellis" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
          </a>
        </div>
        <p className="text-white"><b>All rights reserved &copy; 2023 Hakeem Ellis</b></p>
      </div>
    </footer>
  );
};

export default Footer;

  