import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './index.css'; 

// Main App Component
const App = () => {
  return (
    <Router>
      <Header />
      
      <Footer /> 
    </Router>
  );
};

export default App;