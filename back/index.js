// // index.js

// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const connectDB = require('./config/db');
// const videoRoutes = require('./routes/videoRoutes');

// const app = express();
// const PORT = process.env.PORT || 8081;

// // Enable Cross-Origin Resource Sharing (CORS)
// app.use(cors());

// // Connect to MongoDB
// connectDB();

// // Serve video files dynamically based on titles
// app.get('/video/:title', (req, res) => {
//   const title = req.params.title;
//   const videoPath = path.join(__dirname, 'videos', `${title}.mp4`);
//   res.sendFile(videoPath);
// });

// // Route for video metadata
// app.use('/api/videos', videoRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// index.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const videoRoutes = require('./routes/videoRoutes');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8081;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Connect to MongoDB
connectDB();

// Route to serve video files with range requests
app.get('/video/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const videoPath = path.join(__dirname, 'videos', `${filename}.mp4`);
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(videoPath, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };

      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      fs.createReadStream(videoPath).pipe(res);
    }
  } catch (err) {
    console.error('Error fetching video:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Route for video metadata
app.use('/api/videos', videoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
