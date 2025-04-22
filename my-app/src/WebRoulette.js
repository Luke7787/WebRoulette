import React from 'react';
import './WebRoulette.css';

function WebRoulette({ isLoggedIn }) {
  return (
    <div className = "WebRouletteContainer">
      <h2 className = "WelcomeHeader">
        {isLoggedIn ? "Welcome, User!" : "Welcome, Guest!"}
      </h2>
      <p className = "WelcomeDescription">
        {isLoggedIn
          ? "You can now save your favorite websites and join discussions."
          : "You are exploring random websites as a guest."}
      </p>
      <button className="RandomButton">Random??</button>
    </div>
  );
}

export default WebRoulette;