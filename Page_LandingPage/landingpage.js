// const sqlite3 = require('sqlite3').verbose(); // Require the sqlite3 module
// const dbPath = './books.db'; // Path to your SQLite database file

// // Function to display random books on the landing page
// function displayRandomBooks() {
// const randomBooksContainer = document.getElementById('randomBooks');

// // Open the SQLite database
// const db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//       console.error('Error opening database:', err.message);
//   } else {
//       console.log('Connected to the database.');

//     // Query to retrieve three random books based on genres
//   const query = `
//     SELECT * FROM books
//     ORDER BY RANDOM()
//       LIMIT 3
//       `;

//     // Execute the query
//       db.all(query, [], (err, rows) => {
//       if (err) {
//         console.error('Error executing query:', err);
//       } else {
//         // Display the random books on the landing page
//         rows.forEach(book => {
//         const bookCard = document.createElement('div');
//           bookCard.classList.add('book-card'); // Add CSS class for styling
//           bookCard.innerHTML = `
//             <img src="${book.image}" alt="${book.title} Cover">
//             <h3>${book.title}</h3>
//             <p>Author: ${book.author}</p>
//             <p>Genre: ${book.genre}</p>
//             <p>Condition: ${book.condition}</p>
//             <p>Trade For: ${book.trade_for}</p>
//             <p>Price: $${book.price}</p>
//             `;
//             randomBooksContainer.appendChild(bookCard);
//             });
//       }
//       });

//       // Close the database connection
//       db.close(err => {
//         if (err) {
//           console.error('Error closing database:', err.message);
//         } else {
//           console.log('Database connection closed.');
//         }
//       });
//     }
//   });
// }

// // Call the function to display 3 random books on landing page
// displayRandomBooks();


//navigate to login page when clicked
document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('loginButton');
  
  // Add a click event listener to the Login button
  loginButton.addEventListener('click', () => {
    // Redirect to the login page
    window.location.href = '../Login Page/index.html';
  });
});