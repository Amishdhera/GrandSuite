// backend/models/Room.js
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: { type: String, required: true, unique: true },
    type: {
      type: String,
      enum: ["Deluxe", "Economics", "Standard", "luxury", "suite"],
      required: true,
    },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // Base64 string
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
