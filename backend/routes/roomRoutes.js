// backend/routes/roomRoutes.js
const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

// ✅ Create Room
router.post("/", async (req, res) => {
  try {
    const room = new Room(req.body); // req.body me sab fields aa rahi hain
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Get All Rooms
router.get("/", async (req, res) => {
  try {
    const rooms = await Room.find().sort({ createdAt: -1 });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
