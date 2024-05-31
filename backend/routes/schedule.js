// backend/routes/schedule.js
const express = require('express');
const router = express.Router();
const { generateSchedule } = require('../utils/scheduler');

// Generate schedule
router.post('/', (req, res) => {
  const teams = req.body.teams;
  const schedule = generateSchedule(teams);
  res.json(schedule);
});

module.exports = router;

