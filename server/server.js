const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db");
const playerRoutes = require("./routes/players");

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 7000;

connectDB();

app.use("/api", playerRoutes);

app.get("/", (req, res) => {
  res.send("PLAYER API");
});

app.listen(port, () => {
  console.log("Listening at 7k");
});
