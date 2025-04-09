import React, { useEffect, } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Home.css';
import { FaTshirt, FaHandSparkles, FaTruckMoving } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    }
  }, [navigate]);

  
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <header className="hero">
        <div className="overlay">
          <div className="hero-text">
            <h1>Quality Laundry Service In Your City</h1>
            <p>We take care about cleanness of your cloth</p>
            {/* Link to Services page */}
            <Link to="/services">
              <button className="explore-btn">Explore Services</button>
            </Link>
          </div>
        </div>
      </header>

      {/* Process Section */}
      <section className="process-section">
        <h3 className="section-title">This is how <span>we work</span></h3>
        <div className="steps">
          <div className="step">
            <FaTshirt className="step-icon" />
            <h4>We Collect Your Clothes</h4>
            <p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!</p>
          </div>
          <div className="step">
            <FaHandSparkles className="step-icon" />
            <h4>Wash Your Clothes</h4>
            <p>We use high-quality machines and detergents to ensure your clothes are treated with care and cleanliness.</p>
          </div>
          <div className="step">
            <FaTruckMoving className="step-icon" />
            <h4>Get Delivery</h4>
            <p>Clean clothes delivered right to your door—fast, fresh, and folded to perfection.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
