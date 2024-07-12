const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong } = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.status(200).json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "song not found :(." });
  }
});

module.exports = songs;
