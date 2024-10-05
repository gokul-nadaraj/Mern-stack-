const mongoose=require("mongoose")

const gameSchema = new mongoose.Schema({
  players: [
    {
      name: { type: String, required: true },
      score: { type: Number, required: true }
    }
  ],
  rounds: [
    {
      round: Number,
      player1Choice: String,
      player2Choice: String,
      winner: String
    }
  ],
  finalScores: {
    player1: { type: Number, required: true },
    player2: { type: Number, required: true }
  }
});


const Game = mongoose.model('Game', gameSchema);


module.exports = Game;
