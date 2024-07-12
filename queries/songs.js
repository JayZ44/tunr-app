const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getOneSong = async (id) => {
  try {
    const song = await db.any(`SELECT * FROM songs WHERE id = ${id}`);
    return song;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getOneSong };
