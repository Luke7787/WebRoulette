import React from 'react';

function WebRoulette({ isLoggedIn }) {
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome, User!" : "Welcome, Guest!"}</h2>
      <p>
        {isLoggedIn
          ? "You can now save your favorite websites and join discussions."
          : "You are exploring random websites as a guest."}
      </p>
    </div>
  );
}

export default WebRoulette;