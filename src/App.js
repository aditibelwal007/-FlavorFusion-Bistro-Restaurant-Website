import React, { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery'; // ✅ Import your component
import { motion } from 'framer-motion';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authType, setAuthType] = useState(null); // For modal type: 'signin' or 'signup'

  // Add scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuData = [
    {
      title: "Truffle Pasta",
      description: "Creamy, earthy, and unforgettable",
      image: "/images/images1.jpg",
      price: "$18.99",
      rating: 4.5
    },
    {
      title: "Fire-Grilled Steak",
      description: "Perfectly seared with garlic butter",
      image: "/images/images2.jpg",
      price: "$24.99",
      rating: 4.8
    },
    {
      title: "Garden Salad",
      description: "Fresh greens with vinaigrette",
      image: "/images/images3.jpg",
      price: "$12.50",
      rating: 4.2
    },
  ];


  return (

    <div className="app">
      {/* ✅ NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">🍽️ FlavorFusion</div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>

        <div className="auth-buttons">
          <button className="btn-signin" onClick={() => setAuthType('signin')}>Sign In</button>
          <button className="btn-signup" onClick={() => setAuthType('signup')}>Sign Up</button>
        </div>

      </nav>
      <header className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Welcome to FlavorFusion Bistro</h2>
              <p>Delicious food made with love</p>
              <a href="#menu" className="btn">View Menu</a>
            </div>
          </div>
        </div>
      </header>
      <section id="menu" className="section menu">
        <h3>Our Favorites</h3>
        <div className="menu-items">
          {menuData.map((item, index) => (
            <motion.div
              className="menu-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.image} alt={item.title} className="menu-img" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>

              {/* ✅ Add price and rating */}
              <div className="price-rating">
                <span className="price">{item.price}</span>
                <span className="stars">
                  {"★".repeat(Math.floor(item.rating))} <small>({item.rating})</small>
                </span>
              </div>

              <a href="#menu" className="btn-details">View Details</a>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ✅ Add your gallery here */}
      <section id="gallery" className="section gallery">
        <Gallery />
      </section>

      <section id="about" className="section about about-section">
        <h3>About Us</h3>
        <p>
          Welcome to <strong>FlavorFusion Bistro</strong> — where global flavors meet local freshness. Our bistro was born from a passion for blending diverse culinary traditions with high-quality, locally-sourced ingredients. We believe food should not only nourish the body but also inspire the soul.
        </p>
        <p>
          At FlavorFusion, every dish is a story — carefully crafted by our chefs who bring years of international experience to your plate. Whether you're craving bold spices, comforting classics, or adventurous new tastes, our menu has something for everyone.
        </p>
        <p>
          We are committed to sustainability, community, and creativity. Our ingredients are responsibly sourced, our kitchen minimizes waste, and we regularly feature rotating seasonal specials that highlight the best of each harvest.
        </p>
        <p>
          Whether you're here for a romantic dinner, a quick lunch, or a family celebration, we aim to deliver an unforgettable dining experience that keeps you coming back. From our kitchen to your table — welcome to the fusion of flavor and feeling.
        </p>
        <p>
          <em>Your taste adventure starts here. Let’s eat.</em>
        </p>
      </section>

      <section id="contact" className="section contact">
        <h3>Contact Us</h3>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 Bistro Bliss. All rights reserved.</p>
      </footer>
      {authType && (
        <div className="auth-modal" onClick={() => setAuthType(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{authType === 'signin' ? 'Sign In' : 'Sign Up'}</h3>
            <form className="auth-form">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              {authType === 'signup' && (
                <input type="password" placeholder="Confirm Password" required />
              )}
              <button type="submit" className="btn">
                {authType === 'signin' ? 'Login' : 'Register'}
              </button>
            </form>
            <button className="btn-close" onClick={() => setAuthType(null)}>×</button>
          </div>
        </div>
      )}

    </div>

  );
}

export default App;
