import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import SurpriseModal from './components/SurpriseModal';
import './App.css';
import music from './assets/music.mp3'; // 🎵 make sure your file is in /src/assets/
import SecondPage from './components/SecondPage'; // Import the new second page
import LoveYouPage from './components/LoveYouPage';
import GiftPage from './components/GiftPage'; // Import GiftPage

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // Track if music is playing
  const toggleMusic = () => {
    const audio = document.getElementById('background-music');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Router>
      <Routes>
        {/* Home page with music and surprise modal */}
        <Route
          path="/"
          element={
            <div className="App">
              {/* 🔊 Background Music */}
              <audio id="background-music" loop>
                <source src={music} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
              {/* Button to play/pause music */}
              <button onClick={toggleMusic} style={buttonStyle}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
              </button>
              <HeroSection />
              <SurpriseModal />
            </div>
          }
        />
        {/* Second page with dark background, hearts, and stars */}
        <Route path="/second" element={<SecondPage />} />
        <Route path="/loveyou" element={<LoveYouPage />} />
        {/* Gift page */}
        <Route path="/gift" element={<GiftPage />} />
      </Routes>
    </Router>
  );
}

// Button styles for a simple Play/Pause button
const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  left: '20px', 
  backgroundColor: '#ff5e9c',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App; // Make sure you have the default export here
