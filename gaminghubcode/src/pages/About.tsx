import React, { useState, useEffect } from 'react';
import './About.css';

const banners = [
  {
    title: 'Color Clash',
    description: 'Click the right color before time runs out!',
    image: '/color.png',
  },
  {
    title: 'World Whirl',
    description: 'Rearrange the scrambled words before time runs out.',
    image: '/word.png',
  },
  {
    title: 'About',
    description: 'Learn more about the developer and the mission behind these games.',
    image: '/about.png',
  },
  {
    title: 'Home',
    description: 'Return to the homepage and explore more games.',
    image: '/home.png',
  },
  {
    title: 'Memory Grid',
    description: 'Flip the cards and test your memory in this brain workout.',
    image: '/memory.png',
  },
  {
    title: 'Moondrop',
    description: 'Avoid falling meteors as you catch moons across space!',
    image: '/moondrop.png',
  },
  {
    title: 'Number Smash',
    description: 'Smash the correct numbers before they vanish!',
    image: '/number.png',
  },
  {
    title: 'Pixel Runner',
    description: 'Jump over obstacles and run as far as you can!',
    image: '/pixel.png',
  },
];

const About: React.FC = () => {
  const [current, setCurrent] = useState(0);
  

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="about-container">
      <h1 className="carousel-title">How to Play</h1>

      <div className="carousel-container">
        <button className="carousel-button left" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel-slide">
          <img
            src={banners[current].image}
            alt={banners[current].title}
            className="carousel-image"
          />
          <div className="carousel-text">
            <h2>{banners[current].title}</h2>
            <p>{banners[current].description}</p>
          </div>
        </div>

        <button className="carousel-button right" onClick={nextSlide}>
          ›
        </button>
      </div>
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I'm a passionate designer and coder, blending creativity with functionality. I enjoy creating visually
        appealing and user-friendly experiences, whether it's through web design or app development. My focus is on
        intuitive design and clean, efficient code. I believe that design is not just about aesthetics but about
        creating seamless interactions that make the user's journey as easy as possible.
      </p>
      <img
        src="/me.jpg" // Replace with your image path
        alt="Profile"
        className="about-image"
      />
    </div>
    </div>
    
  );
};

export default About;
