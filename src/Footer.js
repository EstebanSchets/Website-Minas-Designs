import React from 'react';
import './Footer.css'; // Path to your footer CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Make sure Font Awesome is installed

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Minas Designs. All rights reserved.</p>
          <p>Follow us on social media:</p>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
            {/* ...other social media links */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
