import React, { useState, useEffect, } from 'react';

interface NumberSmashProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

const NumberSmash: React.FC<NumberSmashProps> = ({ setScore, score }) => {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30); // 30 seconds for the game
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  
  // Timer to decrease the time limit
  useEffect(() => {
  if (gameStarted && timeLeft > 0) {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }

  if (timeLeft === 0) {
    setGameOver(true);
  }

  return undefined; // ✅ fixes the error
}, [gameStarted, timeLeft]);

  // Generate a random target number
  useEffect(() => {
    const randomTarget = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    setTargetNumber(randomTarget);
  }, [score]); // Update number after each score increase

  // Start the game
  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setTimeLeft(30); // Reset the timer when starting
    setScore(0); // Reset score when starting
  };

  // Smash the number
  const smashNumber = (number: number) => {
    if (number === targetNumber) {
      setScore((prevScore) => prevScore + 1); // Increase score on correct smash
      setTargetNumber(Math.floor(Math.random() * 100) + 1); // Generate a new random number
    }
  };

  return (
    <div style={styles.gameArea}>
      <h1 style={styles.title}>Number Smash</h1>
      {gameOver ? (
        <div style={styles.gameOver}>
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
          <button style={styles.startButton} onClick={startGame}>
            Start New Game
          </button>
        </div>
      ) : (
        <>
          <div style={styles.timer}>Time Left: {timeLeft}s</div>
          <div style={styles.numberContainer}>
            <button
              style={styles.numberButton}
              onClick={() => smashNumber(targetNumber)}
            >
              {targetNumber}
            </button>
          </div>
          <div style={styles.score}>Score: {score}</div>
        </>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  gameArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    minHeight: '400px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  timer: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  numberContainer: {
    marginBottom: '20px',
  },
  numberButton: {
    fontSize: '40px',
    padding: '20px',
    backgroundColor: '#00bcd4',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  score: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  startButton: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  gameOver: {
    textAlign: 'center',
  },
};

export default NumberSmash;
