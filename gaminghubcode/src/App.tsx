import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import StarfieldOnly from './pages/staryfieldonly';  // Your Three.js starfield
import Home from './pages/Home';
import About from './pages/About';
import MoonDrop from './pages/MoonDrop';
import PixelRunner from './pages/PixelRunner';
import NumberSmash from './pages/NumberSmash';
import ColorClash from './pages/ColorClash';
import WorldWhirl from './pages/WorldWhirl';
import MemoryGrid from './pages/MemoryGrid';
import './pages/App.css';

const App: React.FC = () => {
  // Scores for each game
  const [pixelRunnerScore, setPixelRunnerScore] = useState(0);
  const [moonDropScore, setMoonDropScore] = useState(0);
  const [numberSmashScore, setNumberSmashScore] = useState(0);
  const [colorClashScore, setColorClashScore] = useState(0);
  const [worldWhirlScore, setWorldWhirlScore] = useState(0);
  const [memoryGridScore, setMemoryGridScore] = useState(0);

 // Reference for mounting the Three.js starfield
const starfieldContainerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (starfieldContainerRef.current) {
    // Initialize your Three.js scene into this container
    <StarfieldOnly />
  }
}, []);

  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Three.js starfield background */}
        <div ref={starfieldContainerRef} style={styles.staryfieldBackground} />

        {/* Main content sits above the starfield */}
        <div style={styles.contentOverlay}>
          {/* Navigation Bar */}
          <nav style={styles.nav}>
            <Link to="/" style={styles.navLink}>Home</Link>
            <Link to="/about" style={styles.navLink}>About</Link>
            <Link to="/moon-drop" style={styles.navLink}>Moon Drop</Link>
            <Link to="/pixel-runner" style={styles.navLink}>Pixel Runner</Link>
            <Link to="/number-smash" style={styles.navLink}>Number Smash</Link>
            <Link to="/color-clash" style={styles.navLink}>Color Clash</Link>
            <Link to="/world-whirl" style={styles.navLink}>World Whirl</Link>
            <Link to="/memory-grid" style={styles.navLink}>Memory Grid</Link>
          </nav>

          {/* Routed game pages */}
         {/* Routed game pages + GIF Side Panel */}
<div style={styles.gameContainer}>
  {/* Game Content (left half) */}
  <div style={styles.leftPane}>
    <Routes>
      <Route
        path="/"
        element={
          <Home
            pixelRunnerScore={pixelRunnerScore}
            moonDropScore={moonDropScore}
            numberSmashScore={numberSmashScore}
            colorClashScore={colorClashScore}
            worldWhirlScore={worldWhirlScore}
            memoryGridScore={memoryGridScore}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/moon-drop" element={<MoonDrop score={moonDropScore} setScore={setMoonDropScore} />} />
      <Route path="/pixel-runner" element={<PixelRunner score={pixelRunnerScore} setScore={setPixelRunnerScore} />} />
      <Route path="/number-smash" element={<NumberSmash score={numberSmashScore} setScore={setNumberSmashScore} />} />
      <Route path="/color-clash" element={<ColorClash score={colorClashScore} setScore={setColorClashScore} />} />
      <Route path="/world-whirl" element={<WorldWhirl score={worldWhirlScore} setScore={setWorldWhirlScore} />} />
      <Route path="/memory-grid" element={<MemoryGrid score={memoryGridScore} setScore={setMemoryGridScore} />} />
    </Routes>
  </div>

  {/* GIF Display (right half) */}
 <div className="right-pane">
  <img src="/video.gif" alt="Video Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
</div>

</div>
</div>
      </div>
    </Router>
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  staryfieldBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  contentOverlay: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    backgroundColor: 'rgba(40, 44, 52, 0.8)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  },
  gameContainer: {
    flex: 1,
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},

leftPane: {
  width: '100%',
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},

};

export default App;
