const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Paths to files
const dbPath = './books.db';
const imageBasePath = '../CoverImages/';

// Book data
const booksData = [
    ['Tom Hindle', 'The Murder Game', 'Thriller', 'Excellent', 'Any book', 8.99],
    ['George Orwell', '1984', 'Dystopian', 'Good', 'Classic literature', 12.50],
    ['Karen M.McManus', 'One of us is back: Exclusive Edition - One of Us is Lying', 'Young Adult', 'Good', 'Crime', 12.00],
    ['Harper Lee', 'To Kill a Mockingbird', 'Classic', 'Very Good', 'Mystery', 10.00],
    ['Agatha Christie', 'Murder on the Orient Express', 'Mystery', 'Like New', 'Another Mystery book', 8.75],
    ['Claire Douglas', 'The woman who lied', 'Crime', 'Acceptable', 'Romance', 6.59],
    ['Graham Smith', 'Abolish the Monarchy: Why we should and how we will', 'Politics', 'Excellent', 'Sci-Fi', 16.99],
    ['Gabriel Garcia Marquez', 'One Hundred Years of Solitude', 'Magical Realism', 'Very Good', 'Literary Fiction', 14.95],
    ['Gillian Flynn', 'Gone Girl', 'Thriller', 'Excellent', 'Mystery', 9.99],
    ['Taylor JenkinsReid', 'The seven husbands of Evelyn Hugo', 'Romance', 'Good', 'Politics', 7.99],
    ['F. Scott Fitzgerald', 'The Great Gatsby', 'Classic', 'Acceptable', 'Classic literature', 7.50],
    ['Colleen Hoover', 'Ugly Love', 'Romance', 'Poor', 'Any book', 5.00],
    ['Stephen King', 'The Shining', 'Horror', 'Like New', 'Another Horror book', 11.25],
    ['Emma Torzas', 'Ink Blood Sister Scribe: Signed Exclusive Edition', 'Fantasy', 'Like New', 'Thriller', 18.00],
    ['Chimamanda Ngozi Adichie', 'Americanah', 'Contemporary Fiction', 'Very Good', 'Social Commentary', 13.50],
    ['Robert Louis Stevenson', 'Dr Jekyll and Mr Hyde - The Penguin English Library', 'Horror', 'Poor', 'Any book', 6.50],
    ['Douglas Adams', 'The Hitchhiker\'s Guide to the Galaxy', 'Science Fiction', 'Good', 'Comedy', 8.99],
    ['Vex King', 'Good Vibes, Good Life', 'Self Help', 'Acceptable', 'Classic literature', 10.00],
    ['Brian Bilston', 'Days like these:An Alternative Guide to the year in 366 poems', 'Humour', 'Poor', 'Crime', 5.00],
    ['J.R.R. Tolkien', 'The Lord of the Rings', 'Fantasy', 'Excellent', 'Sci-Fi', 20.50]
];

const booksDictionary = booksData.map((data, index) => {
    return {
        id: index + 1,
        author: data[0],
        title: data[1],
        genre: data[2],
        condition: data[3],
        trade_for: data[4],
        price: data[5],
        image: imageBasePath + index + '.jpg'
    };
});

console.log(booksDictionary);

// Create a connection to the database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the database.');
        createTableAndInsertData();
    }
});

function createTableAndInsertData() {
    // Create the 'books' table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY,
            author TEXT,
            title TEXT,
            genre TEXT,
            condition TEXT,
            trade_for TEXT,
            price REAL,
            image TEXT
        )
    `;

    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Table created.');

            // Insert data into the 'books' table
            const insertQuery = `
            INSERT INTO books (author, title, genre, condition, trade_for, price, image)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            `;

            booksDictionary.forEach(book => {
            // Convert the price to a number using parseFloat()
                const price = parseFloat(book.price);
                db.run(insertQuery, [book.author, book.title, book.genre, book.condition, book.trade_for, price, book.image], (err) => {
                    if (err) {
                        console.error('Error inserting data:', err);
                    }
                });
            });

        }
    });
}

//STEPS FOR CREATING .DB FILE:

///Through the terminal navigate to the directory where you have saved the BooksTable.js
///*** Fix permissions if the following steps is throwing errors: sudo chown -R 501:20 "/Users/{USERNAME}/.npm"
///Run in the terminal: npm install sqlite3
///Run in the terminal : node BooksTable.js

//STEPS FOR VIEWING .DB FILE IN TERMINAL:

///Through the terminal navigate to the directory where you have saved the books.db
///Run sqlite3 books.db
///Run SELECT * FROM books;