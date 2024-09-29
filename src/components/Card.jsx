// src/components/Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './Card.css';
const Card = ({ topic }) => {
    const navigate = useNavigate();  // Initialize the navigate function

    const handleLearnMore = () => {
        // Navigate to the details page with the specific topic id
        navigate(`/details/${topic.id}`);
    };

    return (
        <div className="card">
            <img src={topic.image} alt={topic.title} />
            <div className="card-content">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <button onClick={handleLearnMore} className="learn-more">Learn More</button>
            </div>
        </div>
    );
};

export default Card;
