import React from 'react';
import './Gamingone.css';

const Gamingone = () => {
    return (
        <div className="gamingone-container">
            <div className="gaming-section">
                <div className="gaming-image">
                    <img src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Left Side Image" />
                </div>
                <div className="gaming-text">
                    <h1>Action Games</h1>
                    <p>
                    We create high-octane action games that immerse players in fast-paced, adrenaline-filled worlds with stunning graphics and dynamic gameplay.
                    </p>
                </div>
            </div>
            <div className="gaming-section gaming-reverse">
                <div className="gaming-image">
                    <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Right Side Image" />
                </div>
                <div className="gaming-text">
                    <h1>Adventure Games</h1>
                    <p>
                    Our adventure games take players on epic journeys through rich, interactive worlds where every decision can change the course of the story.
                    </p>
                </div>
            </div>

            <div className="gaming-section">
                <div className="gaming-image">
                    <img src="https://images.unsplash.com/photo-1548031045-0ce1bd4a94ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Left Side Image" />
                </div>
                <div className="gaming-text">
                    <h1>Multiplayer Games</h1>
                    <p>
                    We specialize in developing multiplayer games that bring people together, offering competitive and cooperative gameplay experiences.
                    </p>
                </div>
            </div>
            <div className="gaming-section gaming-reverse">
                <div className="gaming-image">
                    <img src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Right Side Image" />
                </div>
                <div className="gaming-text">
                    <h1>Role-Playing Games</h1>
                    <p>
                    Dive into our role-playing games where you can create your own character, explore vast worlds, and live out your wildest fantasies.
                    </p>
                </div>
            </div>
            <div className="gaming-section">
                <div className="gaming-image">
                    <img src="https://images.unsplash.com/photo-1635187834534-d1fa994fcabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Left Side Image" />
                </div>
                <div className="gaming-text">
                    <h1>Game Monetization</h1>
                    <p>
                    We can help you monetize your game and generate revenue, whether through in-game purchases, ads, or other revenue streams. Our team can help you design and implement monetization strategies that align with your business goals and player experience.
                  
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gamingone;
