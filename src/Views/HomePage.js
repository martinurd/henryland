// src/Views/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="cafe-homepage">
            <h1>Henry Capital</h1>
            <p>Flexible liquidity for emerging GPs</p>
            <div className={`cafe-color-box ${isBlue ? 'cafe-blue' : 'cafe-red'}`}></div>
            <button className="cafe-button" onClick={toggleColor}>Change Color</button>

        </div>
    );
};

export default HomePage;