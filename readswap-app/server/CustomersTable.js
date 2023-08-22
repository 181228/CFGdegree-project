const sqlite3 = require('sqlite3').verbose();

// Paths to files
const dbPath = './customers.db';

// Cust data
const custData = [
    ['Emma', 'Smith', 'esmith92',[1, 3],'emmajohnson.smith@email.com', 'Birmingham', 'b1lly3!l!5h', 1990],
    ['Lucas', 'Anderson', 'lucaaaaaas', [4, 8], 'lucas.anderson@email.com', 'Leeds', 'M!d5umM3r', 1991],
    ['Olivia', 'Taylor', 'livvytay21', [10, 15], 'olivia.brown.taylor@email.com', 'Manchester', 'M@nn1eg!rL', 1992],
    ['Agnieszka', 'Thiel', 'aginsideout',[11, 12], 'a.thiel@email.com', 'Glasgow', '0404789', 1993],
    ['Hanan', 'Bayiga', 'Hanana', [2, 5], 'Hananbayiga@email.com', 'Manchester', 'by3by3b!rd13', 1994],
    ['Jodie', 'Coleman', 'jodiebear', [6, 7], 'colemanj@email.com', 'London', 'w!nt3rDr3@m', 1995],
    ['Jasmine', 'Allen', 'nellaj', [9, 13], 'jallen@email.com', 'London', 'l0nD0n!23', 1996],
    ['Amun', 'Omar','amunnnnn',[14, 16], 'amun.omar@email.com', 'Bristol', 'sUnfl0w3rs4d@yz', 1997],
    ['Caitlyn', 'Larnyoh', 'caitlynnnnn', [17, 18], 'caitlyn.larnyoh@email.com', 'Basingstoke', '@l13ngrL!', 1998],
    ['Isabella', 'Miller', 'izzymiller',[19, 20],'jellybelly45@email.com ','Edinburgh', '3ddi3m!ill3r65', 1999],
];

const custDictionary = custData.map((data, index) => {
    return {
        id: index + 1,
        f_name: data[0],
        l_name: data[1],
        u_name: data[2],
        book_id: data[3],
        email: data[4],
        city: data[5],
        password: data[6],
        y_birth: data[7]
    };
});

console.log(custDictionary);

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
    // Create the 'cutomers' table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY,
            f_name TEXT,
            l_name TEXT,
            u_name TEXT,
            book_id TEXT,
            email TEXT,
            city TEXT,
            password TEXT,
            y_birth TEXT
        )
    `;

    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err);
        } else {
            console.log('Table created.');

            // Insert data into the 'customers' table
            const insertQuery = `
            INSERT INTO customers (f_name, l_name, u_name, book_id, email, city, password, y_birth)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;        

            custDictionary.forEach(cust => {
                db.run(insertQuery, [cust.f_name, cust.l_name, cust.u_name, cust.book_id, cust.email, cust.city, cust.password, cust.y_birth], (err) => {
                    if (err) {
                        console.error('Error inserting data:', err);
                    }
                });
            });

        }
    });
}

//STEPS FOR CREATING .DB FILE:

///Through the terminal navigate to the directory where you have saved the CustomersTable.js
///*** Fix permissions if the following steps is throwing errors: sudo chown -R 501:20 "/Users/{USERNAME}/.npm"
///Run in the terminal: npm install sqlite3
///Run in the terminal : node CustomersTable.js

//STEPS FOR VIEWING .DB FILE IN TERMINAL:

///Through the terminal navigate to the directory where you have saved the customers.db
///Run sqlite3 customers.db
///Run SELECT * FROM customers;