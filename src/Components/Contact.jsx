import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image"></div>
      <div className="contact-content">
      {/* <div className="contact-content">
         <h1 className="contact-title">Contact Us</h1>
         <h2 className="contact-subtitle">We would like to hear from you</h2>
       </div> */}
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We would like to hear from you</p>
      </div>
    </div>
  );
};

export default Contact;
