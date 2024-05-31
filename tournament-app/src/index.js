// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tournament', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your routes here

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

