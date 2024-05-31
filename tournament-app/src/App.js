// src/App.js
import React, { useState } from 'react';
import PlayerInput from './components/PlayerInput';
import TeamDisplay from './components/TeamDisplay';
import TournamentSchedule from './components/TournamentSchedule';
import ResultsInput from './components/ResultsInput';

function App() {
  const [players, setPlayers] = useState([]);

  const handlePlayersUpdate = (newPlayers) => {
    setPlayers(newPlayers);
  };

  return (
    <div className="App">
      <h1>Backyard Games Tournament</h1>
      <PlayerInput onPlayersUpdate={handlePlayersUpdate} />
      <TeamDisplay players={players} />
      <TournamentSchedule />
      <ResultsInput />
    </div>
  );
}

export default App;


