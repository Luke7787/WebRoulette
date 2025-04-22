import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebRoulette from './WebRoulette';
import React, { useState } from 'react';
import HomePage from './HomePage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // creates a piece of state called isLoggedIn, which starts off as false
  // setIsLoggedIn is the function you'll use to update that state when a user logs in.

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/roulette" element={<WebRoulette isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;