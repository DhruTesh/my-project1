import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import LottieAnimation from '../LottieAnimation'; 

const Header = () => {
  const [showAnimation, setShowAnimation] = useState(false); 

  const handleLogoClick = () => {
    setShowAnimation(true); 
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false); 
  };

  return (
    <header className="flex flex-col items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img 
          src="https://static.vecteezy .com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg" 
          alt="Logo" 
          className="h-20 w-20 mr-2 cursor-pointer" 
          onClick={handleLogoClick} // Add onClick event to the logo
        />
        <h1 className="text-2xl font-bold">FusionBazaar</h1>
      </div>
      {showAnimation && <LottieAnimation onAnimationComplete={handleAnimationComplete} />} 
      <nav className="flex space-x-4">
        <Link to="/" className="hover:text-gray-400 text-xl">Home</Link> 
        <Link to="/aboutus" className="hover:text-gray-400 text-xl ">AboutUs</Link>
        <Link to="/services" className="hover:text-gray-400 text-xl">Services</Link>
      </nav>
      <div className="flex space-x-4">
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