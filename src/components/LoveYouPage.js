import React, { useState, useEffect } from 'react';
import './LoveYouPage.css';
import music from '../assets/loveyou.mp3'; // 💖 Love music for the page
import loveImage from '../assets/vasu-love.jpg'; // 💖 Your love image
import { Link } from 'react-router-dom'; // Import Link to navigate to gift page

const LoveYouPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Play the love music on component mount
  useEffect(() => {
    const audio = document.getElementById('love-music');
    audio.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  // Toggle the love music play/pause
  const toggleMusic = () => {
    const audio = document.getElementById('love-music');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="love-you-page">
      {/* Background Music */}
      <audio id="love-music" loop>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause Music Button */}
      <button onClick={toggleMusic} style={musicButtonStyle}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>

      <div className="heart-background" />

      {/* Image */}
      <img src={loveImage} alt="Vasu and Love" className="love-image" />

      {/* Love Text */}
      <h1 className="love-text">I Really Love You, Vasu 💖</h1>
      <p className="message">
        Aapke saath har ek moment special hota hai. <br />
        I know aap bhi mughe pyaar karte ho bas confuse ho thoda sa. <br />
        Happy Birthday, my favorite person. 💕
      </p>

      {/* Link to the Final Gift Page */}
      <Link to="/gift">
        <button className="final-gift-button">See Your Final Gift 🎁</button>
      </Link>
    </div>
  );
};

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

export default LoveYouPage;
