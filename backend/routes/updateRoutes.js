const express = require("express");
const router = express.Router();
const Update = require("../models/Update");

// Add email to updates collection
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const newUpdate = new Update({ email });
    await newUpdate.save();

    res.status(201).json({ message: "Email saved successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: err.message });
  }
});

// Get all emails
router.get("/", async (req, res) => {
  try {
    const updates = await Update.find().sort({ createdAt: -1 });
    res.json(updates);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
