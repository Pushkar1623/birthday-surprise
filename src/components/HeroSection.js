import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleSurprise = () => {
    setShowSurprise(true);
    createHearts();
  };

  const createHearts = () => {
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 2 + Math.random() * 3 + 's';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  };

  return (
    <div className="hero-container">
      <h1>Happy Birthday ! 🎉</h1>
      <p>You’re going to love this surprise 💖</p>

      <button className="surprise-btn" onClick={handleSurprise}>
        Click for a Surprise
      </button>

      {showSurprise && (
        <div className="magic-modal">
          <p>🌟 Pyaare Motuu, Meri life me aane ke liye thankuu, Aap meri life me bhut important ho!</p>
          <p>Mein aapka saath kabhi nhi chodu aur aap bhi mat chodna💝</p>
        </div>
      )}

      <Link to="/second">
        <button className="navigate-btn">Next Page ➡️</button>
      </Link>
    </div>
  );
}

export default HeroSection;
