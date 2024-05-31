// backend/routes/results.js
const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// Add match result
router.post('/', async (req, res) => {
  const newResult = new Result(req.body);
  try {
    const result = await newResult.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all results
router.get('/', async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


