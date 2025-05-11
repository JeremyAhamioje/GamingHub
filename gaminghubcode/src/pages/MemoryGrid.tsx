import React, { useState, useEffect } from 'react';

// Define the possible cards in the game
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

interface MemoryGridProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

const MemoryGrid: React.FC<MemoryGridProps> = ({ setScore, score }) => {
  const [cards, setCards] = useState<string[]>([]); // Array of cards, with pairs of cards
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]); // Indices of flipped cards
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]); // Indices of matched cards
  const [moves, setMoves] = useState<number>(0); // Number of moves made by the player
  const [gameOver, setGameOver] = useState<boolean>(false); // Game over flag

  // Shuffle and create the deck of cards
  useEffect(() => {
    const shuffledCards = shuffle([...cardValues, ...cardValues]);
    setCards(shuffledCards);
    setFlippedIndices([]);
    setMatchedIndices([]);
    setMoves(0);
    setGameOver(false);
  }, []);

  // Shuffle function to randomize card positions
  const shuffle = (array: string[]): string[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Handle card flip
  const flipCard = (index: number) => {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedIndices.includes(index)) {
      return; // Do nothing if two cards are already flipped or the card is matched
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      setMoves((prevMoves) => prevMoves + 1);
      checkMatch(newFlippedIndices); // Check if the flipped cards match
    }
  };

  // Check if two flipped cards match
  const checkMatch = (flippedIndices: number[]) => {
    const [firstIndex, secondIndex] = flippedIndices;
    if (cards[firstIndex] === cards[secondIndex]) {
      const newMatchedIndices = [...matchedIndices, firstIndex, secondIndex];
      setMatchedIndices(newMatchedIndices);

      setScore((prevScore) => prevScore + 1); // Increase score for correct match
      if (newMatchedIndices.length === cards.length) {
        setGameOver(true); // If all cards are matched, game is over
      }
    } else {
      setTimeout(() => {
        setFlippedIndices([]); // Flip the cards back after a delay
      }, 1000);
    }
  };

  return (
    <div style={styles.gameArea}>
      <h1 style={styles.title}>Memory Grid</h1>
      {gameOver ? (
        <div style={styles.gameOver}>
          <h2>Congratulations!</h2>
          <p>You won the game with {moves} moves!</p>
          <button style={styles.startButton} onClick={() => window.location.reload()}>
            Start New Game
          </button>
        </div>
      ) : (
        <>
          <div style={styles.cardGrid}>
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => flipCard(index)}
                style={{
                  ...styles.card,
                  backgroundColor: flippedIndices.includes(index) || matchedIndices.includes(index) ? '#00bcd4' : '#888',
                }}
              >
                {(flippedIndices.includes(index) || matchedIndices.includes(index)) && <span style={styles.cardText}>{card}</span>}
              </div>
            ))}
          </div>
          <div style={styles.moves}>Moves: {moves}</div>
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
    backgroundColor: '#fafafa',
    minHeight: '400px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 100px)',
    gap: '10px',
    marginBottom: '20px',
  },
  card: {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    color: 'white',
  },
  cardText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  moves: {
    fontSize: '20px',
    marginTop: '10px',
  },
  score: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '10px',
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

export default MemoryGrid;
