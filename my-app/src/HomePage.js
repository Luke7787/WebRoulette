import './HomePage.css';

function HomePage() {
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
        <button className="Button Login">Login</button>
        <button className="Button Guest">Guest</button>
      </div>
    </div>
  );
}

export default HomePage;
