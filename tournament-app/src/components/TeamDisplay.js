// src/components/TeamDisplay.js
import React, { useState } from 'react';
import axios from 'axios';

function TeamDisplay() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState(['Player1', 'Player2', 'Player3', 'Player4']); // Example player list, replace with actual data

  const generateTeams = () => {
    axios.post('http://localhost:5001/api/teams/randomize', { players: players })
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('There was an error generating the teams!', error);
      });
  };

  return (
    <div>
      <button onClick={generateTeams}>Generate Teams</button>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team[0]} & {team[1]}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamDisplay;

