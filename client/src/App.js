import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';
import Player from './components/Player';

const App = () => {
  const [gs, setGs] = useState({});
  useEffect(() => {
    const socket = socketIOClient('http://localhost:3771/client');
    socket.on('fromServer', (data) => setGs(data));
  });

  let player = {};
  if (gs.allPlayers) {
    [player] = gs.allPlayers;
  }

  return (
    <div className="App">
      <Player
        player={player}
      />
    </div>
  );
};

export default App;
