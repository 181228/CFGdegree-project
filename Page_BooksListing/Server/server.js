const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

const dbPath = '../Database/books.db';

const db = new sqlite3.Database(dbPath);

// Serve the static files from the Front-end folder
app.use(express.static(path.join(__dirname, '../Front-end')));

app.get('/api/books', (req, res) => {
  // Query the database to get all books
  db.all('SELECT * FROM books', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows); // Send the data as a JSON response
    }
  });
});

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-end/index.html'));
});

// Other API endpoints for more complex operations can be added here.

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// To run the server:
/// Go through the terminal to the directory where server.js is stored
/// Run npm install express sqlite3
/// Run node server.js