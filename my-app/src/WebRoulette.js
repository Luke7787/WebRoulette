import React, { useState } from 'react';
import './WebRoulette.css';

function WebRoulette({ isLoggedIn }) {
  const fullWebsiteList = [
    "https://www.fallingfalling.com/",
    "https://zoomquilt.org/",
    "https://puginarug.com",
    "https://longdogechallenge.com/",
    "https://smashthewalls.com/",
    "https://thisissand.com/",
    "https://ncase.me/trust/",
    "https://www.radio.garden/",
    "https://www.koalastothemax.com/",
    "https://alwaysjudgeabookbyitscover.com/",
    "https://stars.chromeexperiments.com/",
    "https://neal.fun/space-elevator/",
    "https://neal.fun/deep-sea/",
    "https://neal.fun/life-stats/",
    "https://www.zoomquilt2.com/",
    "https://hackertyper.net/",
    "https://mondrianandme.com/",
    "https://cat-bounce.com/",
    "https://procatinator.com/",
    "https://eelslap.com/",
    "https://www.rainymood.com/",
    "https://www.boredbutton.com/",
    "https://www.weirdorconfusing.com/",
    "https://www.trypap.com/",
    "https://www.timsgeekzone.com/sandspiel/",
    "https://heeeeeeeey.com/"
  ];

  const [remainingWebsites, setRemainingWebsites] = useState([...fullWebsiteList]);

  const openRandomWebsite = () => {
    if (remainingWebsites.length === 0) {
      alert("You've visited all the websites! 🎉 Refresh to start over.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingWebsites.length);
    const randomSite = remainingWebsites[randomIndex];
    window.open(randomSite, "_blank");

    const updatedList = [...remainingWebsites];
    updatedList.splice(randomIndex, 1);
    setRemainingWebsites(updatedList);
  };

  return (
    <div className="WebRouletteContainer">
      <h2 className="WelcomeHeader">
        {isLoggedIn ? "Welcome, User!" : "Welcome, Guest!"}
      </h2>
      <p className="WelcomeDescription">
        {isLoggedIn
          ? "You can now save your favorite websites and join discussions."
          : "You are exploring random websites as a guest."}
      </p>
      <button className="RandomButton" onClick={openRandomWebsite}>
        Random ???
      </button>
    </div>
  );
}

export default WebRoulette;
