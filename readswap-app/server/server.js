const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
const port = 3000;
const cors = require('cors'); // The front-end is running on another port
const jwt = require('jsonwebtoken');
const app = express();
app.use(cors()); // CORS middleware

const dbPath = './users-books-threads.db';

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

// Search user_id based on username
app.get('/api/user-id/:username', (req, res) => {
    const username = req.params.username;

    db.get('SELECT id FROM users WHERE u_name = ?', [username], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(row);
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
        'INSERT INTO books (author, title, genre, condition, trade_for, price, user_id, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [bookData.author, bookData.title, bookData.genre, bookData.condition, bookData.tradeFor, bookData.price, bookData.user_id, bookData.bookImage],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                const insertedBookId = this.lastID; // Get the ID of the inserted book

                // Save the image with the book's ID as the name
                const imagesFolderPath = path.join(__dirname, '../src/utils/CoverImages');
                const newImagePath = path.join(imagesFolderPath, `${insertedBookId}.jpg`);

                fs.writeFileSync(newImagePath, bookData.bookImage, 'base64');

                // Update the image path in the database
                db.run(
                    'UPDATE books SET image = ? WHERE id = ?',
                    [`${insertedBookId}.jpg`, insertedBookId],
                    updateErr => {
                        if (updateErr) {
                            console.error('Error updating image path in database:', updateErr);
                        }
                    }
                );

                res.status(201).json({ message: 'Book added successfully' });
            }
        }
    );
});

// Register user
app.post('/api/register', (req, res) => {
    const register = req.body;

    // Check if user with the same email or username exists
    db.get('SELECT * FROM users WHERE email = ? OR u_name = ?', [register.email, register.u_name], (err, existingUser) => {
        if (err) {
        res.status(500).json({ error: err.message });
        } else if (existingUser) {
        res.status(400).json({ error: 'User with the same email or username already exists' });
        } else {
        // Calculate age based on year of birth
        const currentYear = new Date().getFullYear();
        const userAge = currentYear - register.y_birth;

        if (userAge < 18) {
            res.status(400).json({ error: 'Underage users cannot register' });
        } else {
            // Insert the user data into the database
            db.run('INSERT INTO users (f_name, l_name, u_name, email, city, password, y_birth) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [register.f_name, register.l_name, register.u_name, register.email, register.city, register.password, register.y_birth],
            (err) => {
                if (err) {
                res.status(500).json({ error: err.message });
                } else {
                res.status(201).json({ message: 'User registered successfully' });
                }
            });
        }
        }
    });
});

// Login user
app.post('/api/login', (req, res) => {
    const { u_name, password } = req.body;

    db.get('SELECT * FROM users WHERE u_name = ? AND password = ?', 
        [u_name, password],
        (err, user) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (!user) {
                res.status(400).json({ error: 'Invalid credentials' });
            } else {
                const token = jwt.sign({ username: u_name }, 'secret_key', { expiresIn: '1h' });
                res.status(200).json({ message: 'Login successful', token: token });
            }
    });
});

// PASSWORD RECOVERY
app.post('/api/recover-password', (req, res) => {
    const { full_name, email } = req.body;

    db.get('SELECT * FROM users WHERE f_name = ? AND email = ?', [full_name, email], (err, user) => {
        if (err) {
        res.status(500).json({ error: err.message });
        } else if (!user) {
        res.status(400).json({ error: 'User not found' });
        } else {

        // SENDING PASSWORD RECOVERY EMAIL
        const recoveryEmail = 'readswap.contact@gmail.com';
        const recoverySubject = 'Password Recovery';
        const recoveryMessage = `Hello ${user.f_name},\n\nYour password: ${user.password}\n\nSincerely,\nThe ReadSwap Team`;
        
        
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'readswap.contact@gmail.com',
            pass: 'kurko5-nupfec-movkEj'
            }
        });

        const mailOptions = {
            from: recoveryEmail,
            to: user.email,
            subject: recoverySubject,
            text: recoveryMessage
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json({ message: 'Password recovery email sent' });
        }
    });
});

// API endpoint for creating a new thread
app.post('/api/create/thread', verifyToken , (req, res) => {
    const { thread, userId } = req.body;

    db.run(
        'INSERT INTO threads (user_id, title, content) VALUES (?, ?, ?)',
        [userId, thread, ''], // Assuming content is empty initially
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Thread created successfully', threadId: this.lastID });
            }
        }
    );
});

// Middleware for token verification
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];
        jwt.verify(bearerToken, 'secret_key', (err, decoded) => {
            if (err) {
                res.status(403).json({ error: 'Invalid token' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

// API endpoint for creating a new reply
app.post('/api/create/reply', (req, res) => {
    const { reply, userId, threadId } = req.body;

    db.run(
        'INSERT INTO replies (thread_id, user_id, content) VALUES (?, ?, ?)',
        [threadId, userId, reply],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Reply posted successfully' });
            }
        }
    );
});

app.get('/api/get/replies/:threadId', (req, res) => {
    const threadId = req.params.threadId;
    db.all(`
        SELECT r.id, r.thread_id, r.content, u.u_name AS username
        FROM replies r
        INNER JOIN users u ON r.user_id = u.id
        WHERE r.thread_id = ?
    `, [threadId], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(rows);
        }
    });
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

app.get('/api/get/threads', (req, res) => {
    db.all(`
        SELECT t.id, t.title, t.content, u.u_name AS username
        FROM threads t
        INNER JOIN users u ON t.user_id = u.id
    `, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(rows);
        }
    });
});

app.post('/api/create/thread', (req, res) => {
    const { thread, userId } = req.body;

    db.run(
        'INSERT INTO threads (user_id, title, content) VALUES (?, ?, ?)',
        [userId, thread, ''], // Assuming content is empty initially
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Thread created successfully', threadId: this.lastID });
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//STEPS FOR RUNNING THE SERVER :
/// Run node server.js