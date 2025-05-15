import React from 'react';
import { Link } from 'react-router-dom';
import './GamesPortfolio.css';

const GameCard = ({ title, image, description, link }) => (
  <div className="game-card" onClick={() => window.open(link, '_blank')}>
    <img src={image} alt={title} className="game-image" />
    <h3 className="game-title">{title}</h3>
    <div className="game-content">
      <p className="game-description">{description}</p>
    </div>
  </div>
);

function GamesPortfolio() {
  const games = [
    {
      title: "Unknown",
      image: "/game-images/unknown.png",
      description: "A fast-paced top-down multiplayer shooter that emphasizes tactical movement and combat",
      platform: "Windows",
      link: "https://programmer-analyst.itch.io/unknown"
    },
    {
      title: "The Saviour",
      image: "/game-images/saviour.png",
      description: "Battle through a robot apocalypse, eliminating enemies and destroying the memory core",
      platform: "Windows",
      link: "https://programmer-analyst.itch.io/the-survivor"
    },
    {
      title: "Save The Innocent Balloon",
      image: "/game-images/balloon.png",
      description: "Protect a floating balloon from waves of shurikens while maneuvering with a jetpack",
      platform: "Browser",
      link: "https://programmer-analyst.itch.io/shooter"
    },
    {
      title: "Cubic Jump",
      image: "/game-images/cubic.png",
      description: "A minimalistic endless runner focused on timing and precision",
      platform: "Windows & Steam",
      link: "https://programmer-analyst.itch.io/cubic-jump"
    },
    {
      title: "Bomb Rush",
      image: "/game-images/bomb.png",
      description: "An explosive action game where timing and strategy are key to survival",
      platform: "Windows",
      link: "https://programmer-analyst.itch.io/fruit-ninja-dash"
    }
  ];

  return (
    <div className="games-portfolio fade">
      <Link to="/" className="back-button">← Back</Link>
      <h1>Game Development Portfolio</h1>
      <p className="portfolio-intro">
        I've developed a diverse set of games that reflect my passion for creative mechanics and engaging gameplay.
      </p>
      <div className="games-grid">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
}

export default GamesPortfolio;
