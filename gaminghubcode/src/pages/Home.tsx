import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file

// Define the interface for passing scores for all games
interface HomeProps {
  pixelRunnerScore: number;
  moonDropScore: number;
  numberSmashScore: number;
  colorClashScore: number;
  worldWhirlScore: number;
  memoryGridScore: number;
}

const Home: React.FC<HomeProps> = ({
  pixelRunnerScore,
  moonDropScore,
  numberSmashScore,
  colorClashScore,
  worldWhirlScore,
  memoryGridScore,
}) => {
  // Use state to store the scores locally
  const [localScores, setLocalScores] = useState({
    pixelRunnerScore,
    moonDropScore,
    numberSmashScore,
    colorClashScore,
    worldWhirlScore,
    memoryGridScore,
  });

  useEffect(() => {
    // Retrieve stored scores from localStorage if they exist
    const storedScores = {
      pixelRunnerScore: localStorage.getItem('pixelRunnerScore'),
      moonDropScore: localStorage.getItem('moonDropScore'),
      numberSmashScore: localStorage.getItem('numberSmashScore'),
      colorClashScore: localStorage.getItem('colorClashScore'),
      worldWhirlScore: localStorage.getItem('worldWhirlScore'),
      memoryGridScore: localStorage.getItem('memoryGridScore'),
    };

    // If stored scores exist, update the local state
    setLocalScores({
      pixelRunnerScore: storedScores.pixelRunnerScore
        ? Number(storedScores.pixelRunnerScore)
        : 0,
      moonDropScore: storedScores.moonDropScore
        ? Number(storedScores.moonDropScore)
        : 0,
      numberSmashScore: storedScores.numberSmashScore
        ? Number(storedScores.numberSmashScore)
        : 0,
      colorClashScore: storedScores.colorClashScore
        ? Number(storedScores.colorClashScore)
        : 0,
      worldWhirlScore: storedScores.worldWhirlScore
        ? Number(storedScores.worldWhirlScore)
        : 0,
      memoryGridScore: storedScores.memoryGridScore
        ? Number(storedScores.memoryGridScore)
        : 0,
    });
  }, []);

  return (
    <div className="home-container">
      {/* Glasmorphic overlay */}
      <div className="overlay"></div>

      {/* User Icon */}
      <div className="user-icon">
        <img src="/user.jpeg" alt="User Avatar" />
        <span className="user-name">User</span>
      </div>

      {/* Display Scores for all Games */}
      <div className="score-display">
        <h2>Game Scores</h2>
        <div className="score-item">Pixel Runner: {localScores.pixelRunnerScore}</div>
        <div className="score-item">Moon Drop: {localScores.moonDropScore}</div>
        <div className="score-item">Number Smash: {localScores.numberSmashScore}</div>
        <div className="score-item">Color Clash: {localScores.colorClashScore}</div>
        <div className="score-item">World Whirl: {localScores.worldWhirlScore}</div>
        <div className="score-item">Memory Grid: {localScores.memoryGridScore}</div>
      </div>
    </div>
  );
};

export default Home;
