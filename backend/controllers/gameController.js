import db from "../config/db.js";

export const getGames = async (req, res) => {
  const [games] = await db.query("SELECT * FROM games");
  res.json(games);
};

export const addGame = async (req, res) => {
  const { title, description, price } = req.body;
  await db.query("INSERT INTO games (title, description, price) VALUES (?, ?, ?)", [
    title,
    description,
    price,
  ]);
  res.json({ message: "Game added" });
};

export const deleteGame = async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM games WHERE id = ?", [id]);
  res.json({ message: "Game deleted" });
};
