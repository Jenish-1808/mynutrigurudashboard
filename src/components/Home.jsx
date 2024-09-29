import React from 'react';
import Card from './Card';

const topics = [
  {
    id: 1,
    title: 'Nutrition Tips',
    description: 'Learn about the best nutrition tips to stay healthy.',
    image: '/nutrition.jpg',
  },
  {
    id: 2,
    title: 'Exercise Benefits',
    description: 'Discover the benefits of regular exercise.',
    image: '/exercise.jpg',
  },
  // Add more topics as needed
];

const Home = () => {
  return (
    <div className="home">
      {topics.map((topic) => (
        <Card key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default Home;
