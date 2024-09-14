import React from 'react';
import './PermanentOne.css';

const PermanentOne = () => {
    return (
        <div className="permanentone-container">
            <div className="section">
                <div className="section-image">
                    <img src="https://images.unsplash.com/photo-1622676666769-1a0407cf10a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Left Side Image" />
                </div>
                <div className="section-text">
                    <h1>Candidate Screening</h1>
                    <p>
                    We take the time to understand our clients' needs and work closely with them to develop a list of requirements for each position. Our team of recruitment specialists then screen potential candidates to ensure that they meet or exceed these requirements, and to verify their technical skills and cultural fit with our clients' organizations.
                    </p>
                </div>
            </div>
            <div className="section section-reverse">
                <div className="section-image">
                    <img src="https://images.unsplash.com/photo-1552582305-6b778426ab60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Right Side Image" />
                </div>
                <div className="section-text">
                    <h1>Talent Acquisition</h1>
                    <p>
                    We have access to a pool of highly skilled IT professionals who are looking for permanent employment opportunities. We can help our clients find the right talent by leveraging our extensive network of candidates, in addition to posting job listings on popular job boards and social media platforms.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="section-image">
                    <img src="https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Left Side Image" />
                </div>
                <div className="section-text">
                    <h1>Hiring Process Management</h1>
                    <p>
                    We manage the entire hiring process, from initial candidate screening to job offer negotiations. Our team of experts work closely with our clients to ensure that the hiring process is smooth and efficient, and that they have access to the information they need to make informed hiring decisions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PermanentOne;
