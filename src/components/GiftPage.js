// src/components/GiftPage.js
import React, { useState, useEffect } from 'react';
import './GiftPage.css'; // Add styles in this file for customization
import giftImage from '../assets/gift-image.jpg'; // Ensure correct import path
import music from '../assets/gift-music.mp3'; // Ensure correct import path for music

const GiftPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('gift-music');
    audio.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('gift-music');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="gift-page">
      {/* Audio for Gift Page */}
      <audio id="gift-music" loop>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleMusic} style={musicButtonStyle}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>

      <div className="gift-animation">
        {/* Use the imported gift image */}
        <img src={giftImage} alt="Gift" className="gift-image" />
        {/* You can add animations like bouncing, spinning, etc. */}
      </div>

      <h1 className="gift-message">You’re the best, Vasu! 🎁</h1>
      <p className="gift-submessage">
        Merko Aisa hug kab Doge. Humesha na Happy rehna Aur na bhi raho toh koi ni Mein hu na humesha khush rakhuga, cartoon banke 😅! ❤️
      </p>
      
      <button 
        onClick={() => window.location.href = '/'} 
        className="back-button"
      >
        Go Back to Main Page
      </button>
    </div>
  );
};

// Button styles for play/pause music button
const musicButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#ff5e9c',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '8px',
  cursor: 'pointer',
  zIndex: 1000,
};

export default GiftPage;
