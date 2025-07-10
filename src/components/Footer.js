import React from 'react';
import './Footer.css'; // Optional if separate styles

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Bistro Bliss. All rights reserved.</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> | 
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a> | 
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}
