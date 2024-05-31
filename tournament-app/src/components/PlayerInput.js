// src/components/PlayerInput.js
import React, { useState } from 'react';
import axios from 'axios';

function PlayerInput({ onPlayersUpdate }) {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState('');

  const addPlayer = () => {
    if (name.trim() !== '') {
      const newPlayers = [...players, name];
      setPlayers(newPlayers);
      setName('');
      onPlayersUpdate(newPlayers); // Update parent component with new players list
    }
  };

  const clearPlayers = () => {
    setPlayers([]);
    onPlayersUpdate([]);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={addPlayer}>Add Player</button>
      <button onClick={clearPlayers}>Clear Players</button>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerInput;


