// src/Components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook

const Header = () => {
    const { toggleTheme } = useTheme(); // Get the toggleTheme function

    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex items-center">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg"
                    alt="Logo"
                    className="h-20 w-20 mr-2"
                />
                <h1 className="text-2xl font-bold">FusionBazaar</h1>
            </div>
            <nav className="flex space-x-4">
                <Link to="/" className="hover:text-gray-400 text-xl">Home</Link>
                <Link to="/about" className="hover:text-gray-400 text-xl">About Us</Link>
                <Link to="/services" className="hover:text-gray-400 text-xl">Services</Link>
            </nav>
            <div className="flex space-x-4">
                <button onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Toggle Theme
                </button>
                <Link to="/login">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;