import express from "express";
import { getGames, addGame, deleteGame } from "../controllers/gameController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getGames);
router.post("/", protect, adminOnly, addGame);
router.delete("/:id", protect, adminOnly, deleteGame);

export default router;
