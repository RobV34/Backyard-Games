// backend/routes/players.js
const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Add a new player
router.post('/', async (req, res) => {
  const newPlayer = new Player({ name: req.body.name });
  try {
    const player = await newPlayer.save();
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all players
router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

