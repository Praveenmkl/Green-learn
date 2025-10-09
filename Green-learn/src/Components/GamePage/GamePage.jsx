import React, { useState } from 'react';
import './GamePage.css';
import game1Img from '../../assets/game1-image.png';
import game2Img from '../../assets/game2-image.png';  // Add this image to assets folder


const games = [
  {
    id: 1,
    title: 'Paltry Butter Pairs',
    url: 'https://gd.games/muditha/paltry-butter--pairs-',
    thumbnail: game1Img,
  },
  {
    id: 2,
    title: 'Memory Match Challenge',
    url: 'https://gd.games/games/564914a3-b523-475b-9231-5dcd791e7209',
   thumbnail: game2Img, // temporary reuse
  },
];



export default function GamePage() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="game-page">
      <h2>Educational Games</h2>
<br/>
      <div className="game-card-container">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => setSelectedGame(game)}
          >
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="game-iframe-container">
          <br/><br/>
        
             
          <iframe
            src={selectedGame.url}
            width="800"
            height="600"
            allowFullScreen
            frameBorder="0"
            title={selectedGame.title}
            style={{ border: '2px solid black', borderRadius: '10px' }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
