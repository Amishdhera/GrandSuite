
const express = require("express");
const Feedback = require("../models/Feedback");
const router = express.Router();

// POST feedback
router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    // console.log("feedback data:", feedback);

    const insertData = await feedback.save();
    // console.log("insert data:", insertData);

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
    console.log("Fetched feedbacks:", feedbacks);
    res.json({ success: true, feedbacks });
  } catch (err) {
    console.log("yai error ya hai:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// DELETE feedback (for admin)
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Feedback not found" });
    }
    res.json({ success: true, message: "Feedback deleted!" });
  } catch (err) {
    console.error("Feedback delete error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
