import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import head from '../assets/Bindassdeallogo.png';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); 
  const navigate = useNavigate();

  const handleMouseEnter = (dropdown) => {
    if (!isMobileMenuOpen) {
      setOpenDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleMobileDropdownToggle = (dropdown) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown); 
  };

  const handleLogoClick = () => {
    navigate('/home');
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); 
  };

  const handleDesktopDropdownClick = (dropdown) => {
    if (!isMobileMenuOpen) {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src={head} alt="BindassDeal Logo" />
      </div>
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
        {/* Services */}
        <div 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('services')} 
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDesktopDropdownClick('services')}
        >
          <span className="nav-link" onClick={() => handleMobileDropdownToggle('services')}>
            Services
            {(openDropdown === 'services' || activeMobileDropdown === 'services') ? <FaChevronUp className="arrow-icon" /> : <FaChevronDown className="arrow-icon" />}
          </span>
          {(openDropdown === 'services' || activeMobileDropdown === 'services') && (
            <div className="dropdown">
              <span className="dropdown-link" onClick={() => handleNavigation('/data')}>Data Services</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/crypto')}>Crypto & Blockchain Services</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/software')}>Software Development</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/mobile')}>Mobile Application</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/ecommerce')}>E-commerce Application</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/website')}>Website Development</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/social')}>Social Media Marketing</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/design')}>Designs & Graphics</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/resources')}>Resource & Hiring</span>
            </div>
          )}
        </div>

        {/* Solutions */}
        <div 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('solutions')} 
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDesktopDropdownClick('solutions')}
        >
          <span className="nav-link" onClick={() => handleMobileDropdownToggle('solutions')}>
            Solutions
            {(openDropdown === 'solutions' || activeMobileDropdown === 'solutions') ? <FaChevronUp className="arrow-icon" /> : <FaChevronDown className="arrow-icon" />}
          </span>
          {(openDropdown === 'solutions' || activeMobileDropdown === 'solutions') && (
            <div className="dropdown">
              <span className="dropdown-link" onClick={() => handleNavigation('/fintech')}>Fintech</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/gaming')}>Gaming</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/banking')}>Banking</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/retail')}>Retail</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/commerce')}>eCommerce</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/advertising')}>Advertising</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/media')}>Media & Entertainment</span>
            </div>
          )}
        </div>

        {/* Hiring & Resourcing */}
        <div 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('hiring')} 
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDesktopDropdownClick('hiring')}
        >
          <span className="nav-link" onClick={() => handleMobileDropdownToggle('hiring')}>
            Hiring & Resourcing
            {(openDropdown === 'hiring' || activeMobileDropdown === 'hiring') ? <FaChevronUp className="arrow-icon" /> : <FaChevronDown className="arrow-icon" />}
          </span>
          {(openDropdown === 'hiring' || activeMobileDropdown === 'hiring') && (
            <div className="dropdown">
              <span className="dropdown-link" onClick={() => handleNavigation('/general')}>General Staffing</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/outsource')}>Outsource Services</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/hire')}>Hire, Train & Deploy</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/permanent')}>Permanent Placements</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/payroll')}>Payroll & Compliance Resourcing</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/enterprise')}>Enterprise Solution</span>
              <span className="dropdown-link" onClick={() => handleNavigation('/training')}>Training & Skilling</span>
            </div>
          )}
        </div>

        {/* Portfolio */}
        <div 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('portfolio')} 
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDesktopDropdownClick('portfolio')}
        >
          <span className="nav-link" onClick={() => handleMobileDropdownToggle('portfolio')}>
            Portfolio
            {(openDropdown === 'portfolio' || activeMobileDropdown === 'portfolio') ? <FaChevronUp className="arrow-icon" /> : <FaChevronDown className="arrow-icon" />}
          </span>
          {(openDropdown === 'portfolio' || activeMobileDropdown === 'portfolio') && (
            <div className="dropdown">
              <span className="dropdown-link" onClick={() => handleNavigation('/portfolio')}>Portfolio</span>
            </div>
          )}
        </div>

        {/* Contact Us */}
        <div 
          className="nav-item"
          onMouseEnter={() => handleMouseEnter('contact')} 
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDesktopDropdownClick('contact')}
        >
          <span className="nav-link" onClick={() => handleMobileDropdownToggle('contact')}>
            Contact Us
            {(openDropdown === 'contact' || activeMobileDropdown === 'contact') ? <FaChevronUp className="arrow-icon" /> : <FaChevronDown className="arrow-icon" />}
          </span>
          {(openDropdown === 'contact' || activeMobileDropdown === 'contact') && (
            <div className="dropdown">
              <span className="dropdown-link" onClick={() => handleNavigation('/contact')}>Contact</span>
            </div>
          )}
        </div>
      </nav>
      <button className="button">Get Started</button>
    </header>
  );
};

export default Header;
