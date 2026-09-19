const express = require("express"); // Import the Express module

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies
// app.use(express.static('public')); // Serve static files from the 'public' directory

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Module 8 API",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Player data (In-memory storage for demonstration purposes)

let players = [
  {
    id: 1,
    name: "Takeshi Goda Gian",
    position: "Forward",
    number: 10,
  },
  {
    id: 2,
    name: "Sensei",
    position: "Right Wing",
    number: 9,
  },
];


//  GET — Retrieve Data

app.get("/api/players", (req, res) => {
  res.json(players);
});


// GET — Retrieve One Resource

app.get("/api/players/:id", (req, res) => {
  const id = Number(req.params.id);

  const player = players.find((p) => p.id === id);

  if (!player) {
    return res.status(404).json({
      message: "Player not found",
    });
  }

  res.json(player);
});


// POST — Create Data

app.post("/api/players", (req, res) => {
  const newPlayer = {
    id: players.length + 1,
    name: req.body.name,
    position: req.body.position,
    number: req.body.number,
  };

  players.push(newPlayer);

  res.status(201).json({
    message: "Player created successfully",
    player: newPlayer,
  });

});


// PUT — Update Data

app.put("/api/players/:id", (req, res) => {
  const id = Number(req.params.id);

  const player = players.find((p) => p.id === id);

  if (!player) {
    return res.status(404).json({
      message: "Player not found",
    });
  }

  player.name = req.body.name;
  player.position = req.body.position;
  player.number = req.body.number;

  res.json({
    message: "Player updated successfully",
    player: player,
  });
});


// DELETE — Delete Data

app.delete("/api/players/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = players.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Player not found",
    });
  }

  players.splice(index, 1);

  res.json({
    message: "Player deleted successfully",
  });
});
