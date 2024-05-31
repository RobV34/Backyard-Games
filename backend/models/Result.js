// backend/models/Result.js
const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  team1: {
    type: String,
    required: true
  },
  team2: {
    type: String,
    required: true
  },
  winner: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Result', ResultSchema);
