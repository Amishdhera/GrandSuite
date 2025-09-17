const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  roomType: { type: String, required: true },
  guests: { type: Number, required: true },
  specialRequests: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
