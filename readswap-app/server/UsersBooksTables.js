const sqlite3 = require('sqlite3').verbose();

const dbPath = './users-books.db';

// Cust data
const custData = [
    ['Emma', 'Smith', 'esmith92','emmajohnson.smith@email.com', 'Birmingham', 'b1lly3!l!5h', 1990],
    ['Lucas', 'Anderson', 'lucaaaaaas', 'lucas.anderson@email.com', 'Leeds', 'M!d5umM3r', 1991],
    ['Olivia', 'Taylor', 'livvytay21', 'olivia.brown.taylor@email.com', 'Manchester', 'M@nn1eg!rL', 1992],
    ['Agnieszka', 'Thiel', 'aginsideout', 'a.thiel@email.com', 'Glasgow', '0404789', 1993],
    ['Hanan', 'Bayiga', 'Hanana', 'Hananbayiga@email.com', 'Manchester', 'by3by3b!rd13', 1994],
    ['Jodie', 'Coleman', 'jodiebear', 'colemanj@email.com', 'London', 'w!nt3rDr3@m', 1995],
    ['Jasmine', 'Allen', 'nellaj', 'jallen@email.com', 'London', 'l0nD0n!23', 1996],
    ['Amun', 'Omar','amunnnnn', 'amun.omar@email.com', 'Bristol', 'sUnfl0w3rs4d@yz', 1997],
    ['Caitlyn', 'Larnyoh', 'caitlynnnnn', 'caitlyn.larnyoh@email.com', 'Basingstoke', '@l13ngrL!', 1998],
    ['Isabella', 'Miller', 'izzymiller','jellybelly45@email.com ','Edinburgh', '3ddi3m!ill3r65', 1999],
];

// Book data
const booksData = [
    ['Tom Hindle', 'The Murder Game', 'Thriller', 'Excellent', 'Any book', 8.99,'0.jpg', 10],
    ['George Orwell', '1984', 'Dystopian', 'Good', 'Classic literature', 12.50,'1.jpg', 9],
    ['Karen M.McManus', 'One of us is back: Exclusive Edition - One of Us is Lying', 'Young Adult', 'Good', 'Crime','2.jpg', 12.00, 8],
    ['Harper Lee', 'To Kill a Mockingbird', 'Classic', 'Very Good', 'Mystery', 10.00,'3.jpg', 7],
    ['Agatha Christie', 'Murder on the Orient Express', 'Mystery', 'Like New', 'Another Mystery book', 8.75,'4.jpg', 6],
    ['Claire Douglas', 'The woman who lied', 'Crime', 'Acceptable', 'Romance', 6.59,'5.jpg', 5],
    ['Graham Smith', 'Abolish the Monarchy: Why we should and how we will', 'Politics', 'Excellent', 'Sci-Fi', 16.99,'6.jpg', 4],
    ['Gabriel Garcia Marquez', 'One Hundred Years of Solitude', 'Magical Realism', 'Very Good', 'Literary Fiction', 14.95,'7.jpg', 3],
    ['Gillian Flynn', 'Gone Girl', 'Thriller', 'Excellent', 'Mystery', 9.99,'8.jpg', 2],
    ['Taylor JenkinsReid', 'The seven husbands of Evelyn Hugo', 'Romance', 'Good', 'Politics', 7.99,'9.jpg', 1],
    ['F. Scott Fitzgerald', 'The Great Gatsby', 'Classic', 'Acceptable', 'Classic literature', 7.50,'10.jpg', 10],
    ['Colleen Hoover', 'Ugly Love', 'Romance', 'Poor', 'Any book', 5.00,'11.jpg', 9],
    ['Stephen King', 'The Shining', 'Horror', 'Like New', 'Another Horror book', 11.25,'12.jpg', 8],
    ['Emma Torzas', 'Ink Blood Sister Scribe: Signed Exclusive Edition', 'Fantasy', 'Like New', 'Thriller', 18.00,'13.jpg', 7],
    ['Chimamanda Ngozi Adichie', 'Americanah', 'Contemporary Fiction', 'Very Good', 'Social Commentary', 13.50,'14.jpg', 6],
    ['Robert Louis Stevenson', 'Dr Jekyll and Mr Hyde - The Penguin English Library', 'Horror', 'Poor', 'Any book', 6.50,'15.jpg', 5],
    ['Douglas Adams', 'The Hitchhiker\'s Guide to the Galaxy', 'Science Fiction', 'Good', 'Comedy', 8.99,'16.jpg', 4],
    ['Vex King', 'Good Vibes, Good Life', 'Self Help', 'Acceptable', 'Classic literature', 10.00,'17.jpg', 3],
    ['Brian Bilston', 'Days like these:An Alternative Guide to the year in 366 poems', 'Humour', 'Poor', 'Crime', 5.00,'18.jpg', 2],
    ['J.R.R. Tolkien', 'The Lord of the Rings', 'Fantasy', 'Excellent', 'Sci-Fi', 20.50,'19.jpg', 1]
];


// Create a connection to the database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the database.');
        createTablesAndInsertData();
    }
});

function createTablesAndInsertData() {
    // Create the 'users' table
    const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            f_name TEXT,
            l_name TEXT,
            u_name TEXT,
            email TEXT,
            city TEXT,
            password TEXT,
            y_birth INTEGER
        )
    `;

    // Create the 'books' table
    const createBooksTableQuery = `
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY,
            author TEXT,
            title TEXT,
            genre TEXT,
            condition TEXT,
            trade_for TEXT,
            price REAL,
            image TEXT,
            user_id INTEGER,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    `;

    db.run(createUsersTableQuery, (err) => {
        if (err) {
            console.error('Error creating users table:', err);
        } else {
            console.log('Users table created.');
        }
    });

    db.run(createBooksTableQuery, (err) => {
        if (err) {
            console.error('Error creating books table:', err);
        } else {
            console.log('Books table created.');

            // Insert data into the tables
            insertData();
        }
    });
        
}

function insertData() {
    // Insert users data
    const usersInsertQuery = `
        INSERT INTO users (f_name, l_name, u_name, email, city, password, y_birth)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    custData.forEach(user => {
        db.run(usersInsertQuery, [user[0], user[1], user[2], user[3], user[4], user[5], user[6]], (err) => {
            if (err) {
                console.error('Error inserting user data:', err);
            }
        });
    });

    // Insert books data with user_id
    const booksInsertQuery = `
        INSERT INTO books (author, title, genre, condition, trade_for, price, image, user_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const userIdsForBooks = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ];
    
    booksData.forEach((book, index) => {
        const userId = userIdsForBooks[index];
        console.log(`Inserting book with title: ${book[1]} and user_id: ${userId}`);
        db.run(booksInsertQuery, [book[0], book[1], book[2], book[3], book[4], book[5], book[6], userId], (err) => {
            if (err) {
                console.error('Error inserting book data:', err);
            } else {
                console.log('Book inserted successfully.');
            }
        });
    });

}

//STEPS FOR CREATING .DB FILE:

///Through the terminal navigate to the directory where you have saved the UsersBooksTables.js
///*** Fix permissions if the following steps is throwing errors: sudo chown -R 501:20 "/Users/{USERNAME}/.npm"
///Run in the terminal: npm install sqlite3
///Run in the terminal : node UsersBooksTables.js

//STEPS FOR VIEWING .DB FILE IN TERMINAL:

///Through the terminal navigate to the directory where you have saved the users-books.db
///Run sqlite3 users-books.db
///Run SELECT * FROM users;