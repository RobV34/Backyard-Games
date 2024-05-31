// backend/models/Team.js
const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  players: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Team', TeamSchema);
