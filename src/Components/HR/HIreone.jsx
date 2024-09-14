import React from 'react';
import './Hireone.css';

const Hireone = () => {
    return (
        <div className="hireone-container">
            <div className="section">
                <div className="section-image">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Left Side Image" />
                </div>
                <div className="section-text">
                    <h1>Recruitment Services</h1>
                    <p>
                        We can provide recruitment services to our clients, helping them to find the right candidates for their IT roles. Our recruitment services include job postings, candidate screening, and interview scheduling, ensuring that our clients have access to a pool of qualified candidates.
                    </p>
                </div>
            </div>
            <div className="section section-reverse">
                <div className="section-image">
                    <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Right Side Image" />
                </div>
                <div className="section-text">
                    <h1>Staff Outsourcing</h1>
                    <p>
                    We can provide training services to our clients, helping them to upskill their existing IT staff and prepare them for new roles and responsibilities. Our training services include customized training programs, on-the-job training, and certification courses, ensuring that our clients' IT staff have the skills and knowledge they need to succeed.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="section-image">
                    <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Left Side Image" />
                </div>
                <div className="section-text">
                    <h1>Deployment Services</h1>
                    <p>
                    We can provide deployment services to our clients, helping them to deploy their IT staff to their projects and assignments. Our deployment services include onboarding, project management, and performance tracking, ensuring that our clients' IT staff are productive and effective from day one.
                    </p>
                </div>
            </div>

            {/* <div className="section section-reverse">
                <div className="section-image">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Right Side Image" />
                </div>
                <div className="section-text">
                    <h1>Recruitment Services</h1>
                    <p>
                        We can provide recruitment services to our clients, helping them to find the right candidates for their IT roles. Our recruitment services include job postings, candidate screening, and interview scheduling, ensuring that our clients have access to a pool of qualified candidates.
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default Hireone;
