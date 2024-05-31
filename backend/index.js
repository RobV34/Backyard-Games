// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/tournament', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
const players = require('./routes/players');
const teams = require('./routes/teams');
const schedule = require('./routes/schedule');
const results = require('./routes/results');

app.use('/api/players', players);
app.use('/api/teams', teams);
app.use('/api/schedule', schedule);
app.use('/api/results', results);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


