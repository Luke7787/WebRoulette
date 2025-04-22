import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage({ setIsLoggedIn }) {
  
  const navigate = useNavigate();  // Initialize the navigate function

  const handleGuestClick = () => {
    navigate('/roulette');  // Navigate to WebRoulette page for Guest
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);  // Simulate a login
    navigate('/roulette');  // Navigate to WebRoulette page for Logged-in user
  };

  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <h1 className="SiteTitle">WebRoulette</h1>
      </header>
        <p className="Description">
        Welcome to WebRoulette! With just a click, <br /> 
        you’ll be taken to a random website on the internet! <br /> <br />

        Use Guest mode to explore random websites without signing in. <br />
        Login to access features like saving your favorite websites <br />
        or participating in forum discussions.
        </p>
      <div className="ButtonGroup">
        <button className="Button Login" onClick={handleLoginClick}>Login</button>
        <button className="Button Guest" onClick={handleGuestClick}>Guest</button>
      </div>
    </div>
  );
}

export default HomePage;
