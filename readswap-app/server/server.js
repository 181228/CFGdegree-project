const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const port = 3000;
const cors = require('cors'); // Because the front-end is running on another port

const app = express();
app.use(cors()); // CORS middleware

const dbPath = './users-books.db';

const db = new sqlite3.Database(dbPath);

 // Parse JSON requests
app.use(express.json());

// Serve the static files from the Page_BooksListing folder
app.use(express.static(path.join(__dirname, '../src/pages/Page_BooksListing')));

// Serve the Cover Images folder
app.use('/CoverImages', (req, res, next) => {
    if (req.url.endsWith('.jpg')) {
        res.type('image/jpeg');
    } else if (!req.url.includes('.')) {
        req.url += '.jpg';
        res.type('image/jpeg');
    }
    next();
}, express.static(path.join(__dirname, '../src/utils/CoverImages')));


// API endpoint for retrieving all books
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

// API endpoint for individual book details
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

// API endpoint for retrieving all users
app.get('/api/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// API endpoint for individual user details
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    // Query the database to get the user details with the specified userId
    db.get('SELECT * FROM users WHERE id = ?', [userId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(row);
        }
    });
});

// API endpoint for getting book owner's username based on book_id
app.get('/api/books/:id/owner', (req, res) => {
    const bookId = req.params.id;
    // Query the database to get the owner's username based on book_id
    db.get('SELECT u.u_name AS owner FROM books b JOIN users u ON b.user_id = u.id WHERE b.id = ?', [bookId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: 'Owner not found' });
        } else {
            res.json(row); // Send the owner's username as a JSON response
        }
    });
});


app.post('/api/books', (req, res) => {
  const bookData = req.body; // Form data sent from the React app

    // Insert the book data into the database
    db.run(
        'INSERT INTO books (author, title, genre, condition, trade_for, price, image, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [bookData.author, bookData.title, bookData.genre, bookData.condition, bookData.tradeFor, bookData.price, bookData.image, bookData.user_id],
        (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Book added successfully' });
        }
        }
    );
});


// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Page_BooksListing/BooksListing.jsx'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Page_RegistrationLogin/RegistrationLogin.jsx'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/Page_LandingPage/LandingPage.jsx'));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//STEPS FOR RUNNING THE SERVER :
/// Run node server.js