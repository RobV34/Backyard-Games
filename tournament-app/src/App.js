// src/App.js
import React from 'react';
import PlayerInput from './components/PlayerInput';
import TeamDisplay from './components/TeamDisplay';
import TournamentSchedule from './components/TournamentSchedule';
import ResultsInput from './components/ResultsInput';

function App() {
  return (
    <div className="App">
      <h1>Backyard Games Tournament</h1>
      <PlayerInput />
      <TeamDisplay />
      <TournamentSchedule />
      <ResultsInput />
    </div>
  );
}

export default App;

