import React, { useState } from 'react';
import './Contactone.css';

const Contactone = () => {
    const [formData, setFormData] = useState({firstName: '',lastName: '',email: '',phone: '',comments: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,[name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('Form submitted', formData);
        setFormData({firstName: '',lastName: '',email: '',phone: '',comments: '',

        });
    };

    return (
        <div className="contactone-container">
            <h2>Tell us how to contact you and we'll get in touch.</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First name *</label>
                        <input type="text" id="firstName" name="firstName" placeholder="John" value={formData.firstName}
                            onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name *</label>
                        <input type="text"  id="lastName" name="lastName" placeholder="Doe" value={formData.lastName}
                            onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" placeholder="john.doe@gmail.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" placeholder="+91-9616576320" value={formData.phone} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="comments">Comments *</label>
                    <textarea id="comments" name="comments" placeholder="Enter your message..."value={formData.comments}onChange= {handleChange}required ></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contactone;
