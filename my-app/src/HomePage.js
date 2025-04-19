import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <h1 className="SiteTitle">WebRoulette</h1>
      </header>
      <p className="Description">
      Welcome to WebRoulette! With just a click, <br /> you’ll be taken to a random website on the internet!
      </p>
      <div className="ButtonGroup">
        <button className="Button Login">Login</button>
        <button className="Button Guest">Guest</button>
      </div>
    </div>
  );
}

export default HomePage;
