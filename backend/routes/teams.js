// backend/routes/teams.js
const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const { randomizeTeams } = require('../utils/randomizer');

// Create random teams
router.post('/randomize', (req, res) => {
  const players = req.body.players;
  const teams = randomizeTeams(players);
  res.json(teams);
});

// Add a new team
router.post('/', async (req, res) => {
  const newTeam = new Team({ players: req.body.players });
  try {
    const team = await newTeam.save();
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

