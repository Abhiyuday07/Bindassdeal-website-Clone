import React from 'react';
import './Footer.css'; // Import the external CSS file
import foot from '../assets/footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* <img src="logo.png" alt="BindassDeal Logo" className="footer-logo" /> */}
          <img src={foot} alt="BindassDeal Logo" />
          <p>
            We can help you with the solutions you need to meet your business goals.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="#">BindassDeal Intelligence</a></li>
            <li><a href="#">SplitDeal</a></li>
            <li><a href="#">BindassDeal Ecommerce</a></li>
            <li><a href="#">Free vs. Premium</a></li>
            <li><a href="#">Our Platform</a></li>
            <li><a href="#">Request a Demo</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#">Gaming</a></li>
            <li><a href="#">Banking</a></li>
            <li><a href="#">eCommerce</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Media & Entertainment</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Gaming</a></li>
            <li><a href="#">Banking</a></li>
            <li><a href="#">eCommerce</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Media & Entertainment</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About us</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">BindassDeal</a></li>
            <li><a href="#">Trust & Assurance</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partnership</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        All rights reserved <span className="highlight">©BindassDeal.com</span>
      </div>
    </footer>
  );
};

export default Footer;
