import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SecondPage.css';
import music from '../assets/perfect.mp3';

const FloatingHearts = () => (
  <div className="floating-hearts">
    {[...Array(20)].map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      return (
        <div
          key={i}
          className="floating-heart"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
          }}
        >
          {i % 3 === 0 ? '💖' : i % 3 === 1 ? '💘' : '❤️'}
        </div>
      );
    })}
  </div>
);

const TwinklingStars = () => {
  const stars = [...Array(100)].map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const duration = Math.random() * 2 + 1;
    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
        }}
      ></div>
    );
  });
  return <div className="twinkling-stars">{stars}</div>;
};

const SecondPage = () => {
  const message = "Happy Birthday Vasu 🎉💖 Aap sabki life me happiness bhar dete ho ✨";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText((prev) => prev + message[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="second-page">
      <audio autoPlay loop>
        <source src={music} type="audio/mp3" />
      </audio>
      <TwinklingStars />
      <FloatingHearts />
      <h1 className="typewriter-text">{displayedText}</h1>
      <Link to="/loveyou">
  <button className="next-button">A Secret Page 💖</button>
</Link>
    </div>
  );
};

export default SecondPage;
