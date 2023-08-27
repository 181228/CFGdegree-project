const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'Customers'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Use body-parser middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, and client-side JavaScript)
app.use(express.static('./loginpage')); // Assuming your static files are in a "public" folder

// Handle login form submission
app.post('/loginpage', (req, res) => {
  const { email, password } = req.body;

  // Validate inputs (you can add more validation here)
  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill out all fields' });
  }

  // Check credentials against the database
  db.query('SELECT * FROM Users WHERE account_holder_email = ? AND password = ?', [email, password], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Successful login
    return res.status(200).json({ message: 'Login successful' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});