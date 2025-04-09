import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login page after logout
  };

  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in

  return (
    <nav className="navbar">
      <div className="logo">🮺 Wash 'n Go</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="right-side">
        {isLoggedIn ? (
          <>
            <span className="phone">(08) 728 256 266</span>
            <Link to="/services">
              <button className="navbar-btn book-btn">Book a Wash</button>
            </Link>

            <button className="navbar-btn logout-btn" onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-btn login-btn">Log In</button>
            </Link>
            <Link to="/register">
              <button className="navbar-btn signup-btn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
