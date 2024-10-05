const express = require('express');
const mongoose = require('mongoose');
const Game = require('./models/Game');
const gameroute=require('./routes/Gameroute')
const cors=require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(gameroute)

mongoose.connect('mongodb://localhost:27017/gamesDB', );

app.get('/api/games', async (req, res) => {
  const games = await Game.find();
  res.json(games);
});


app.listen(5000, () => {
  console.log('Server running on port 5000');
});
