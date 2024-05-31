// src/components/ResultsInput.js
import React, { useState } from 'react';
import axios from 'axios';

function ResultsInput() {
  const [results, setResults] = useState([]);
  const [match, setMatch] = useState({ team1: '', team2: '', winner: '' });

  const addResult = () => {
    axios.post('http://localhost:5000/api/results', match)
      .then(response => {
        setResults([...results, response.data]);
        setMatch({ team1: '', team2: '', winner: '' });
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Team 1"
        value={match.team1}
        onChange={e => setMatch({ ...match, team1: e.target.value })}
      />
      <input
        type="text"
        placeholder="Team 2"
        value={match.team2}
        onChange={e => setMatch({ ...match, team2: e.target.value })}
      />
      <input
        type="text"
        placeholder="Winner"
        value={match.winner}
        onChange={e => setMatch({ ...match, winner: e.target.value })}
      />
      <button onClick={addResult}>Add Result</button>
      <ul>
        {results.map(result => (
          <li key={result._id}>{result.team1} vs {result.team2} - Winner: {result.winner}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsInput;
