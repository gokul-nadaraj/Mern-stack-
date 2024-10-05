const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
router.post('/api/games', async (req, res) => {
  try {
    const { players, rounds, finalScores } = req.body;

  
    console.log('Incoming game data:', req.body);

    const gameData = { players, rounds, finalScores };

   
    console.log('Game data to be saved:', gameData);

    const newGame = await Game.create(gameData);
    res.status(201).json(newGame);
  } catch (error) {
    console.error('Error saving game data:', error.message);
    res.status(500).json({ message: 'Error saving game data', error: error.message });
  }
});


module.exports = router;
