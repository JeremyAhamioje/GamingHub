import React, { useState, useEffect } from 'react';

interface WorldWhirlProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

const words = ['apple', 'banana', 'cherry', 'grape', 'orange', 'kiwi', 'mango'];

const WorldWhirl: React.FC<WorldWhirlProps> = ({ setScore, score }) => {
  const [targetWord, setTargetWord] = useState<string>('');
  const [scrambledWord, setScrambledWord] = useState<string>('');
  const [guess, setGuess] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [attempts, setAttempts] = useState<number>(3);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Timer logic
   useEffect(() => {
  if (timeLeft > 0 && !gameOver) {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  } else if (timeLeft === 0 || attempts === 0) {
    setGameOver(true);
  }

  return undefined; // <-- Add this line to satisfy TypeScript
}, [timeLeft, gameOver, attempts]);



  // Generate a new word when game starts
  useEffect(() => {
    if (!gameOver && !targetWord) {
      generateNewWord();
    }
  }, [gameOver, targetWord]);

  // Generate and scramble a word
  const generateNewWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setTargetWord(randomWord);
    setScrambledWord(scrambleWord(randomWord));
  };

  const scrambleWord = (word: string): string => {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  };

  const checkGuess = () => {
    if (guess.toLowerCase() === targetWord.toLowerCase()) {
      setScore((prevScore) => prevScore + 1);
      generateNewWord();
      setGuess('');
    } else {
      setAttempts((prevAttempts) => prevAttempts - 1);
      setGuess('');
    }
  };

  const startGame = () => {
    setGameOver(false);
    setTimeLeft(30);
    setAttempts(3);
    setScore(0);
    generateNewWord();
    setGuess('');
  };

  return (
    <div style={styles.gameArea}>
      <h1 style={styles.title}>World Whirl</h1>
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
          <div style={styles.wordContainer}>
            <h3>Scrambled Word: {scrambledWord}</h3>
          </div>
          <div style={styles.attempts}>Attempts Left: {attempts}</div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter your guess"
              style={styles.input}
            />
            <button style={styles.submitButton} onClick={checkGuess}>
              Submit
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
  backgroundColor: 'grey', // ← change this line
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
  wordContainer: {
    marginBottom: '20px',
  },
  attempts: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    fontSize: '18px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '200px',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '18px',
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
    color: 'blue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  gameOver: {
    textAlign: 'center',
  },
};

export default WorldWhirl;
