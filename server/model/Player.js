const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  age: {
    type: Date,
    required: true,
  },
  position: {
    type: String,
    enum: [
      "ST",
      "RW",
      "LW",
      "CAM",
      "CM",
      "DM",
      "RM",
      "LM",
      "RB",
      "LB",
      "CB",
      "GK",
    ],
    require: true,
  },
  age: {
    type: Number,
  },
  foot: {
    type: String,
    enum: ["right", "left"],
  },
});

module.exports = mongoose.model("Player", playerSchema);
