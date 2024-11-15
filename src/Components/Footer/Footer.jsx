
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
      <p className="text-sm">
        &copy; {currentYear} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;