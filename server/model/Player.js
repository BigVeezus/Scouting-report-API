const mongoose = require("mongoose");
const countries = require("../country");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  position: {
    type: [String],
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
  club: {
    type: String,
    default: "Free Agent",
  },
  valueInMillions: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    Required: true,
  },
  foot: {
    type: String,
    enum: ["right", "left", "both"],
  },
});

module.exports = mongoose.model("Player", playerSchema);
