// backend/routes/teams.js
const express = require('express');
const router = express.Router();
const { randomizeTeams, generateTeamNames } = require('../utils/randomizer');

// Create random teams with names
router.post('/randomize', (req, res) => {
  const players = req.body.players;
  const teams = randomizeTeams(players);
  const namedTeams = generateTeamNames(teams);
  res.json(namedTeams);
});

module.exports = router;



