const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

const dbPath = '../Database/books.db';
const db = new sqlite3.Database(dbPath);

// Serve the static files from the Front-end folder
app.use(express.static(path.join(__dirname, '../Front-end')));

// Serve the Cover Images folder
app.use('/CoverImages', (req, res, next) => {
  if (req.url.endsWith('.jpg')) {
    res.type('image/jpeg');
  }
  next();
}, express.static(path.join(__dirname, '../CoverImages')));


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

// Add the route for individual book details
app.get('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  // Query the database to get the book details with the specified bookId
  db.get('SELECT * FROM books WHERE id = ?', [bookId], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(row); // Send the data as a JSON response
    }
  });
});

app.get('/api/books')

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-end/BooksListing.html'));
});

// Other API endpoints for more complex operations can be added here.

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//STEPS FOR RUNNING THE SERVER:

/// Go through the terminal to the directory where server.js is stored
/// Run npm install express sqlite3
/// Run node server.js