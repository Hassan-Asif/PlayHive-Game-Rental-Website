import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Fake "database"
let users = []; 

// Secret for JWT
const JWT_SECRET = "supersecretkey"; // ⬅️ Move this to .env later

// REGISTER
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { id: Date.now(), email, password: hashedPassword, name };
  users.push(newUser);

  res.json({ message: "User registered successfully", user: { email, name } });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) return res.status(400).json({ error: "User not found" });

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

// GOOGLE LOGIN
router.post("/google", (req, res) => {
  const { email, name } = req.body;

  let user = users.find(u => u.email === email);
  if (!user) {
    user = { id: Date.now(), email, name, google: true };
    users.push(user);
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "Google login successful", token });
});

export default router;
