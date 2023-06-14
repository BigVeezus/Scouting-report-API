const express = require("express");
const router = express.Router();
const Player = require("../model/Player");
const players = require("../players.json");

router.get("/players", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    let sort = req.query.sort || "valueInMillions";
    let position = req.query.position || "all";
    let foot = req.query.foot || "all";

    const postionOptions = [
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
    ];

    const footOptions = ["right", "left", "both"];

    position === "all"
      ? (position = [...postionOptions])
      : (position = req.query.position.split(","));

    foot === "all" ? (foot = [...footOptions]) : (foot = [foot]);
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const players = await Player.find({
      name: {
        $regex: search,
        $options: "i",
      },
    })
      .where("position")
      .in([...position])
      .where("foot")
      .in([...foot])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Player.countDocuments({
      position: { $in: [...position] },
      foot: { $in: [...foot] },
      name: { $regex: search, $options: "i" },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      positions: postionOptions,
      feet: footOptions,
      players,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
});

const insertPlayers = async () => {
  try {
    const docs = await Player.insertMany(players);
    return Promise.resolve(docs);
  } catch (err) {
    return Promise.reject(err);
  }
};

// insertPlayers()
//   .then((docs) => console.log(docs))
//   .catch((err) => console.log(err));

module.exports = router;
