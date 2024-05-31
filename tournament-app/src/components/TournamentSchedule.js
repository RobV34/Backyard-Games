import React, { useState } from 'react';
import axios from 'axios';

function TournamentSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [teams, setTeams] = useState(['', '']); // Initial state with two empty team names

  const handleTeamChange = (index, event) => {
    const newTeams = teams.slice();
    newTeams[index] = event.target.value;
    setTeams(newTeams);
  };

  const addTeam = () => {
    setTeams([...teams, '']); // Add a new empty team
  };

  const generateSchedule = () => {
    axios.post('http://localhost:5001/api/schedule', { teams: teams })
      .then(response => {
        setSchedule(response.data);
      })
      .catch(error => {
        console.error('There was an error generating the schedule!', error);
      });
  };

  return (
    <div>
      <h2>Enter Team Names</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>
            <input
              type="text"
              value={team}
              onChange={(event) => handleTeamChange(index, event)}
              placeholder={`Team ${index + 1}`}
            />
          </li>
        ))}
      </ul>
      <button onClick={addTeam}>Add Team</button>
      <button onClick={generateSchedule}>Generate Schedule</button>
      <ul>
        {schedule.map((round, roundIndex) => (
          <li key={roundIndex}>
            <h3>Round {roundIndex + 1}</h3>
            <ul>
              {round.map((match, matchIndex) => (
                <li key={matchIndex}>{match[0]} vs {match[1]}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TournamentSchedule;

