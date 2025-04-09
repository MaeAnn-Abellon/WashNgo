// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
