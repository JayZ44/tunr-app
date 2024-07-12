const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songsController");

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/songs", songsController);

app.get("/", (req, res) => {
  res.send("Welcome to Tunr!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found :(");
});
module.exports = app;
