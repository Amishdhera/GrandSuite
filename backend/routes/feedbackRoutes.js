const express = require("express");
const Feedback = require("../models/Feedback");
const router = express.Router();

// POST feedback
router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ success: true, message: "Feedback saved!", feedback });
  } catch (err) {
    console.error("Feedback error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// GET all feedback (for admin)
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json({ success: true, feedbacks });
  } catch (err) {
    console.error("Feedback fetch error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
