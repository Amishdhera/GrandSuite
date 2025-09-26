// models/Feedback.js
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    feedback: { type: String, required: true },
    rating: { type: Number, required: true },
    requestedServices: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedbacks", feedbackSchema);
