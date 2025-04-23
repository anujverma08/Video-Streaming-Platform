// routes/videoRoutes.js

const express = require('express');
const router = express.Router();
const Video = require('../models/video');

// Endpoint to get all videos with metadata
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
