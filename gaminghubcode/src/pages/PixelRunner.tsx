import React, { useState, useEffect, useRef } from 'react';

interface PixelRunnerProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

const PixelRunner: React.FC<PixelRunnerProps> = ({ setScore, score }) => {
  const [playerPosition, setPlayerPosition] = useState(0); // Player's horizontal position
  const [obstacles, setObstacles] = useState<any[]>([]); // Array to store obstacles
  const [isJumping, setIsJumping] = useState(false); // Is the player jumping?
  const [jumpHeight, setJumpHeight] = useState(50); // Jump height (default)
  const gameAreaRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);

  // Handle player movement on key press (right arrow)
  useEffect(() => {
    const movePlayer = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setPlayerPosition((prevPosition) => prevPosition + 10); // Move player 10px to the right
      }
    };

    window.addEventListener('keydown', movePlayer);

    return () => {
      window.removeEventListener('keydown', movePlayer); // Cleanup the event listener
    };
  }, []);

  // Generate obstacles at intervals (every 2 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setObstacles((prev) => [
        ...prev,
        { left: 1000, top: Math.random() * 200, width: 50, height: 50, passed: false }, // Create new obstacle
      ]);
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  // Move obstacles to the left every 30ms (simulate obstacle movement)
  useEffect(() => {
    const moveObstacles = setInterval(() => {
      setObstacles((prev) =>
        prev
          .map((obstacle) => ({
            ...obstacle,
            left: obstacle.left - 10, // Move obstacle 10px to the left
          }))
          .filter((obstacle) => obstacle.left > -50) // Remove obstacles that go off-screen
      );
    }, 30); // Update every 30ms

    return () => clearInterval(moveObstacles); // Cleanup the interval
  }, []);

  // Handle jumping when clicked
  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setJumpHeight(150); // Set jump height to 150px
      setTimeout(() => {
        setIsJumping(false); // Set jumping back to false after jump
        setJumpHeight(50); // Reset height after jump
      }, 500); // Reset after 500ms
    }
  };
useEffect(() => {
  setObstacles((prevObstacles) => {
    return prevObstacles
      .map((obstacle) => {
        // COLLISION DETECTION
        const isColliding =
          playerRef.current &&
          obstacle.left < playerPosition + 30 &&
          obstacle.left + obstacle.width > playerPosition &&
          obstacle.top < jumpHeight + 30 &&
          obstacle.top + obstacle.height > jumpHeight;

        if (isColliding) {
          setScore(0); // Reset score on collision
          return null; // Remove collided obstacle
        }

        // SCORE if obstacle leaves screen and wasn't counted
        if (!obstacle.passed && obstacle.left + obstacle.width < 0) {
          setScore((prev) => prev + 1);
          return { ...obstacle, passed: true };
        }

        return obstacle;
      })
      .filter(Boolean); // Remove null (collided) obstacles
  });
}, [playerPosition, jumpHeight, setScore]);


  return (
    <div
      ref={gameAreaRef}
      style={styles.gameArea}
      onClick={handleJump} // Trigger jump on click
    >
      <div
        ref={playerRef}
        style={{
          ...styles.player,
          bottom: `${jumpHeight}px`, // Control player jump height
          left: `${playerPosition}px`, // Control player horizontal position
        }}
      />
      {obstacles.map((obstacle, index) => (
        <div
          key={index}
          style={{
            ...styles.obstacle,
            left: `${obstacle.left}px`, // Position obstacles based on their left position
            top: `${obstacle.top}px`, // Position obstacles based on their top value
          }}
        />
      ))}
      <div style={styles.score}>Score: {score}</div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  gameArea: {
    position: 'relative',
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0', // Light grey background
  },
  player: {
    position: 'absolute',
    width: '30px', // Reduced size of the blue player
    height: '30px', // Reduced size of the blue player
    backgroundColor: 'blue', // Blue player block
  },
  obstacle: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundColor: 'red', // Red obstacle blocks
  },
  score: {
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black', // Score text in black
  },
};

export default PixelRunner;
