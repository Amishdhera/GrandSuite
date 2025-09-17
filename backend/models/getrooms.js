const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String, // image URL or path
});

module.exports = mongoose.model('Room', roomSchema);
