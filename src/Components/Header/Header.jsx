
import React from 'react';
import logo from 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid'; 

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-xl font-bold">Your Company</h1>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/about" className="hover:text-gray-400">About Us</a>
        <a href="/services" className="hover:text-gray-400">Services</a>
      </nav>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          New Registration
        </button>
      </div>
    </header>
  );
};

export default Header;
