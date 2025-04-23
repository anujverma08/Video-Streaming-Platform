// models/video.js

const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  filename: String
});

module.exports = mongoose.model('Video', videoSchema);
