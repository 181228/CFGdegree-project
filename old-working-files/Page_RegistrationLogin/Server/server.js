const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

const dbPath = '../Database/customers.db';
const db = new sqlite3.Database(dbPath);

// Serve the static files from the Front-end folder
app.use(express.static(path.join(__dirname, '../Front-end')));

app.get('/api/customers', (req, res) => {
  // Query the database to get all books
  db.all('SELECT * FROM customers', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows); // Send the data as a JSON response
    }
  });
});

// Add the route for individual customer details
app.get('/api/customers/:u_name', (req, res) => {
  const u_name = req.params.u_name;
  // Query the database to get the customer details with the specified username
  db.get('SELECT * FROM customers WHERE u_name = ?', [u_name], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(row); // Send the data as a JSON response
    }
  });
});

app.get('/api/customers')

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-end/Customers.html'));
});

// Other API endpoints for more complex operations can be added here.

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//STEPS FOR RUNNING THE SERVER:

/// Go through the terminal to the directory where server.js is stored
/// Run npm install express sqlite3
/// Run node server.js