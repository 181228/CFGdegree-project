const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "Landing Page" folder
app.use(express.static(path.join(__dirname, 'Landing Page')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});