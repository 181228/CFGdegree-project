const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const port = 3000;
const cors = require('cors'); //cuz front-end is running on other port

const app = express();
app.use(cors()); // middleware CORS

const booksDbPath = './books.db';
const customersDbPath = './customers.db';

const booksDb = new sqlite3.Database(booksDbPath);
const customersDb = new sqlite3.Database(customersDbPath);


// Serve the static files from the Page_BooksListing folder
app.use(express.static(path.join(__dirname, '../src/Page_BooksListing')));

// Serve the Cover Images folder
app.use('/CoverImages', (req, res, next) => {
    if (req.url.endsWith('.jpg')) {
        res.type('image/jpeg');
    }
    next();
}, express.static(path.join(__dirname, '../src/utils/CoverImages')));

app.get('/api/books', (req, res) => {
  // Query the database to get all books
  booksDb.all('SELECT * FROM books', (err, rows) => {
    if (err) {
        res.status(500).json({ error: err.message });
    } else {
        res.json(rows); // Send the data as a JSON response
    }
    });
});

// The route for individual book details
app.get('/api/books/:id', (req, res) => {
    const bookId = req.params.id;
    // Query the database to get the book details with the specified bookId
    booksDb.get('SELECT * FROM books WHERE id = ?', [bookId], (err, row) => {
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

// API endpoint for retrieving all customers
app.get('/api/customers', (req, res) => {
    customersDb.all('SELECT * FROM customers', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// API endpoint for retrieving individual customer details
app.get('/api/customers/:u_name', (req, res) => {
    const u_name = req.params.u_name;
    customersDb.get('SELECT * FROM customers WHERE u_name = ?', [u_name], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(row);
        }
    });
});

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/Page_BooksListing/BooksListing.jsx'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/Page_RegistrationLogin/RegistrationLogin.jsx'));
});

app.get('/api/books/:id/owner', (req, res) => {
    const bookId = req.params.id;

    // HANDLE REQUEST OF BOOKS OWNER USERNAME DATA BASED ON BOOK_ID FROM CUSTOMERS.DB
    booksDb.get('SELECT c.u_name AS owner FROM books b JOIN customers c ON b.book_owner_id = c.id WHERE b.id = ?', [bookId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: 'Owner not found' });
        } else {
            res.json(row); // SEND INFO AS JSON RESPONSE
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//STEPS FOR RUNNING THE SERVER :
/// Run node server.js