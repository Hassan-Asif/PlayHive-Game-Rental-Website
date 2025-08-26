import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// --- JWT Secret ---
const SECRET_KEY = "supersecretkey123";

// --- Temporary Database ---
let users = [
  { id: 1, name: "Admin", email: "admin@example.com", password: "admin123", role: "admin" },
  { id: 2, name: "User", email: "user@example.com", password: "user123", role: "user" },
];

let games = [
  { id: 1, title: "GTA V", price: 10, description: "Open world action game" },
  { id: 2, title: "FIFA 23", price: 8, description: "Football simulation" },
];

let cart = [];

// --- Middleware to verify JWT ---
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
};

// --- Auth Routes ---
app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const newUser = { id: users.length + 1, name, email, password, role: "user" };
  users.push(newUser);

  const token = jwt.sign(
    { id: newUser.id, email: newUser.email, role: newUser.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  return res.status(201).json({ message: "User registered successfully", user: newUser, token });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  return res.json({ message: "Login successful", user, token });
});

// --- Game Routes ---
app.get("/api/games", (req, res) => {
  res.json(games);
});

app.post("/api/cart", authenticateToken, (req, res) => {
  const { gameId } = req.body;
  const game = games.find((g) => g.id === gameId);
  if (!game) return res.status(404).json({ error: "Game not found" });

  cart.push({ userId: req.user.id, game });
  res.json({ message: "Added to cart", cart });
});

app.get("/api/cart", authenticateToken, (req, res) => {
  const userCart = cart.filter((c) => c.userId === req.user.id);
  res.json(userCart);
});

app.get("/api/admin/games", authenticateToken, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied" });
  }
  res.json(games);
});

// --- Serve Vue Frontend Build ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "dist");

app.use(express.static(frontendPath));

// ✅ Fix for Express 5 path-to-regexp issue (use middleware instead of app.get("*"))
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// --- Start Server ---
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Fullstack app running at http://localhost:${PORT}`)
);
