// index.js

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8081;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Serve static files (videos)
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// Define video metadata
const videos = [
  {
    id: 1,
    title: 'Sample Video 1',
    description: 'This is a sample video description.',
    filename: 'sat.mp4'
  },
  {
    id: 2,
    title: 'Sample Video 2',
    description: 'Another sample video description.',
    filename: 'suk.mp4'
  }
];

// Endpoint to get all videos with metadata
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

// Endpoint to serve individual video files
app.get('/api/videos/:filename', (req, res) => {
  const filename = req.params.filename;
  const videoPath = path.join(__dirname, 'videos', filename);
  res.sendFile(videoPath);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
