const express = require("express");
const router = express.Router();
const Player = require("../model/Player");

router.get("/players", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || " ";

    let sort = req.query.sort || "age";
    let position = req.query.foot || "all";

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
    position === "all"
      ? (position = [...postionOptions])
      : (position = req.query.position.split(","));
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
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Player.countDocuments({
      genre: { $in: [...position] },
      name: { $regex: search, $options: "i" },
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      positions: postionOptions,
      players,
    };

    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
