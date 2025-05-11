import React, { useState, useEffect, useRef } from 'react';
import StarryFieldOnly from './staryfieldonly';

interface Entity {
  id: string;
  left: number;
}

interface GameProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

const MoonDrop: React.FC<GameProps> = ({ setScore, score }) => {
  const [moons, setMoons] = useState<Entity[]>([]);
  const [bombs, setBombs] = useState<Entity[]>([]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const moonRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const bombRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const startTime = useRef(Date.now());

  // Spawn moons
  useEffect(() => {
    const interval = setInterval(() => {
      const id = crypto.randomUUID();
      setMoons(prev => [...prev, { id, left: Math.random() * window.innerWidth }]);
      setTimeout(() => {
        setMoons(prev => prev.filter(m => m.id !== id));
      }, 10000);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Spawn bombs
  useEffect(() => {
    const interval = setInterval(() => {
      const id = crypto.randomUUID();
      setBombs(prev => [...prev, { id, left: Math.random() * window.innerWidth }]);
      setTimeout(() => {
        setBombs(prev => prev.filter(b => b.id !== id));
      }, 10000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Collision detection & dynamic speed
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime.current) / 10000; // every 10s reduces duration by 1s
      const duration = Math.max(1, 6 - elapsed);

      // Moons collision
      moons.forEach(moon => {
        const ref = moonRefs.current[moon.id];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            cursor.x >= rect.left &&
            cursor.x <= rect.right &&
            cursor.y >= rect.top &&
            cursor.y <= rect.bottom
          ) {
            setScore(prev => {
              const next = prev + 1;
              localStorage.setItem('gameScore', String(next));
              return next;
            });
            setMoons(prev => prev.filter(m => m.id !== moon.id));
            delete moonRefs.current[moon.id];
          }
          ref.style.animationDuration = `${duration}s`;
        }
      });

      // Bombs collision
      bombs.forEach(bomb => {
        const ref = bombRefs.current[bomb.id];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            cursor.x >= rect.left &&
            cursor.x <= rect.right &&
            cursor.y >= rect.top &&
            cursor.y <= rect.bottom
          ) {
            setScore(0);
            localStorage.setItem('gameScore', '0');
            setBombs(prev => prev.filter(b => b.id !== bomb.id));
            delete bombRefs.current[bomb.id];
          }
          ref.style.animationDuration = `${duration}s`;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, [cursor, moons, bombs, setScore]);

  return (
    <div style={styles.gameArea}>
      <StarryFieldOnly />
      <div style={styles.score}>Score: {score}</div>

      {moons.map(moon => {
        const elapsed = (Date.now() - startTime.current) / 10000;
        const duration = Math.max(1, 6 - elapsed);
        return (
          <img
            key={moon.id}
            ref={el => {
              moonRefs.current[moon.id] = el;
            }}
            src="/moon.png"
            alt="moon"
            style={{
              ...styles.entity,
              left: moon.left,
              animation: `fall ${duration}s linear forwards`
            }}
          />
        );
      })}

      {bombs.map(bomb => {
        const elapsed = (Date.now() - startTime.current) / 10000;
        const duration = Math.max(1, 6 - elapsed);
        return (
          <img
            key={bomb.id}
            ref={el => {
              bombRefs.current[bomb.id] = el;
            }}
            src="/bomb.png"
            alt="bomb"
            style={{
              ...styles.entity,
              left: bomb.left,
              animation: `fall ${duration}s linear forwards`
            }}
          />
        );
      })}

      <style>{`
        @keyframes fall {
          0% { top: -50px; opacity: 1; transform: scale(1); }
          100% { top: 100vh; opacity: 0.3; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  gameArea: {
    position: 'relative',
    width: '45vw',
    height: '100vh',
    overflow: 'hidden',
  },
  score: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
    zIndex: 10,
  },
  entity: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    top: '-50px',
    pointerEvents: 'none',
  },
};

export default MoonDrop;
