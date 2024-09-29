// src/App.js
import React from 'react';
import './App.css';
import Card from './components/Card';
import NutritionTips from './components/NutritionTips';
import ImageSlider from './components/ImageSlider'; // Import the ImageSlider component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage'; // Page for "Learn More" button
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
    const nutritionTopics = [
        {
            image: '/real1.jpg',
            title: 'Intermittent Fasting',
            description: 'Intermittent fasting (IF) alternates between eating and fasting, supporting weight loss, metabolism, heart health, and mental clarity.',
            id: 1,
        },
        {
            image: '/real2.png',
            title: 'Nutri Score',
            description: 'Nutri-Score is a front-of-pack label that rates the nutritional quality of food products on a color-coded scale from A (healthiest) to E, helping consumers make healthier choices.',
            id: 2,
        },
        {
            image: '/diet.png',
            title: 'The Mind Diet',
            description: 'The MIND diet combines the Mediterranean and DASH diets, focusing on brain-healthy foods to potentially reduce Alzheimer\'s risk.',
            id: 3,
        },
        {
            image: '/Millets.png',
            title: 'Millet\'s Nutrient Treasure',
            description: 'Explore how millets are the hidden treasure of fibers, proteins, and essential nutrients, unlocking a path to better health and sustainable farming.',
            id: 4,
        },
    ];

    const nutritionTips = [
        {
            image: '/image2.jpg',
            title: 'Stay Hydrated',
            description: 'Drinking water is essential for your health. Aim for at least 8 glasses a day.',
        },
        {
            image: '/image2.jpg',
            title: 'Incorporate Whole Foods',
            description: 'Focus on whole, unprocessed foods to get the nutrients your body needs.',
        },
        {
            image: '/image2.jpg',
            title: 'Limit Sugar Intake',
            description: 'Try to limit added sugars to improve your overall health and wellness.',
        },
        {
            image: '/image2.jpg',
            title: 'Practice Mindful Eating',
            description: 'Pay attention to what you eat and savor each bite to enjoy your meals more.',
        },
    ];

    return (
        <Router>
            <div className="App">
                {/* <header className="hero">
                    <div className="hero-content">
                        <h1>Welcome to Nutrition Hub</h1>
                        <p>Your guide to a healthier lifestyle</p>
                    </div>
                </header> */}

                {/* Image Slider Section */}
                <ImageSlider />

                <main>
                    <section className="cards-section">
                        <h2>Nutrition Topics</h2>
                        <div className="cards-container">
                            {nutritionTopics.map((topic, index) => (
                                <Card key={index} topic={topic} />
                            ))}
                        </div>
                    </section>
                </main>

                <NutritionTips tips={nutritionTips} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                </Routes>

                {/* Footer Section */}
                <Footer /> 
            </div>
        </Router>
    );
};

export default App;