
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './index.css'; 

// Home Component
const Home = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Welcome to Our Website!</h2>
    <p className="text-lg">This is the home page where you can find the latest updates and features.</p>
  </div>
);

// About Component
const About = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="text-lg">We are dedicated to providing high-quality services to our customers.</p>
  </div>
);

// Services Component
const Services = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Our Services</h2>
    <ul className="list-disc pl-5">
      <li className="mb-2">Service 1: Description of service 1.</li>
      <li className="mb-2">Service 2: Description of service 2.</li>
      <li className="mb-2">Service 3: Description of service 3.</li>
    </ul>
  </div>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer /> 
    </Router>
  );
};

export default App;