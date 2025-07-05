import React from 'react';

const GamePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Enjoy Our Educational Game!</h2>
      <iframe
        src="https://gd.games/games/ff22d36e-66e6-4252-a2fe-a9755d5bb508"
        width="800"
        height="600"
        allowFullScreen
        frameBorder="0"
        title="Educational Game"
        style={{ border: '2px solid black', borderRadius: '10px' }}
      ></iframe>
    </div>
  );
};

export default GamePage;
