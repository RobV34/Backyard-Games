// src/components/TeamDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeamDisplay({ players }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams([]); // Reset teams when players change
  }, [players]);

  const generateTeams = () => {
    axios.post('http://localhost:5001/api/teams/randomize', { players })
      .then(response => {
        const generatedTeams = response.data.map((team, index) => ({
          name: `Team ${index + 1}`,
          players: team.players
        }));
        setTeams(generatedTeams);
      })
      .catch(error => {
        console.error('There was an error generating the teams!', error);
      });
  };

  const handleTeamNameChange = (index, event) => {
    const updatedTeams = teams.slice();
    updatedTeams[index].name = event.target.value;
    setTeams(updatedTeams);
  };

  return (
    <div>
      <button onClick={generateTeams}>Generate Teams</button>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            <input
              type="text"
              value={team.name}
              onChange={(event) => handleTeamNameChange(index, event)}
            />: {team.players[0]} & {team.players[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamDisplay;




