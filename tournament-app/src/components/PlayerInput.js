// PlayerInput.js
import React, { useState } from 'react';
import axios from 'axios';

function PlayerInput() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState('');

  const addPlayer = () => {
    axios.post('http://localhost:5000/players', { name }).then((response) => {
      setPlayers([...players, response.data]);
      setName('');
    });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addPlayer}>Add Player</button>
      <ul>
        {players.map((player) => (
          <li key={player._id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerInput;
