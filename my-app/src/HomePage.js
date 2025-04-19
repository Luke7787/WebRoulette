import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <h1 className="SiteTitle">WebRoulette</h1>
      </header>
      <button className="Button Login">Login</button>
      <button className="Button Guest">Guest</button>
    </div>
  );
}

export default HomePage;
