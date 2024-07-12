const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");
const { checkName, checkArtist } = require("../validations/checkSongs");
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.status(200).json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  if (song.id) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "song not found :(." });
  }
});

songs.post("/", checkName, checkArtist, async (req, res) => {
  const newSong = await createSong(req.body);
  res.json(newSong);
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "song not found :(." });
  }
});

songs.put("/:id", checkName, checkArtist, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "song not found :(." });
  }
});

module.exports = songs;
