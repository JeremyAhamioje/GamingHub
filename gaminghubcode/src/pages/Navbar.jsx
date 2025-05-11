import React from 'react';
import { Link } from 'react-router-dom';

// SVG Icons
const homeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const aboutIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM2 20h20v2H2z" />
  </svg>
);

const moonDropIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a9.97 9.97 0 00-9.95 9.49A7 7 0 1112 2z" />
  </svg>
);

const skyDodgeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="24" height="24">
    <path d="M10 2a1 1 0 01.993.883L11 3v1h2a1 1 0 110 2h-2v1h1a1 1 0 110 2h-1v1h2a1 1 0 110 2h-2v1a1 1 0 11-2 0v-1H7a1 1 0 110-2h2v-1H8a1 1 0 110-2h1V6H7a1 1 0 110-2h2V3a1 1 0 011-1z" />
  </svg>
);

const pixelJumpIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
    <path d="M4 0h8v2H4V0zM2 2h12v2H2V2zm1 3h10v2H3V5zm1 3h8v2H4V8zm1 3h6v2H5v-2z" />
  </svg>
);

const fruitBlastIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M17.5 4a4.5 4.5 0 00-4.48 4.01A6.5 6.5 0 002 14.5a6.5 6.5 0 006.5 6.5c1.94 0 3.66-.86 4.82-2.22A4.5 4.5 0 1017.5 4z" />
  </svg>
);

const astroRacerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M21 12l-8-8v6H3v4h10v6l8-8z" />
  </svg>
);

const blockTwistIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="24" height="24">
    <path d="M4 3h4v4H4V3zm8 0h4v4h-4V3zM4 9h4v4H4V9zm8 0h4v4h-4V9zM4 15h4v2H4v-2zm8 0h4v2h-4v-2z" />
  </svg>
);

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
        <Link to="/Home" className="nav-link">
          {homeIcon}
          <span>Home</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/about" className="nav-link">
          {aboutIcon}
          <span>About Me</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/MoonDrop" className="nav-link">
          {moonDropIcon}
          <span>Moondrop</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/NumberSmash" className="nav-link">
          {skyDodgeIcon}
          <span>Number Smash</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/pixelRunner" className="nav-link">
          {pixelJumpIcon}
          <span>Pixel Runner</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/WorldWhirl" className="nav-link">
          {fruitBlastIcon}
          <span>World Whirl</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/MemoryGrid" className="nav-link">
          {astroRacerIcon}
          <span>Memory grid</span>
        </Link>
      </div>

      <div className="nav-item">
        <Link to="/ColorClash" className="nav-link">
          {blockTwistIcon}
          <span>Color Clash</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
