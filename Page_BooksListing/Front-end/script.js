// Fetching BooksListing from the backend and display them on the page
function fetchAndDisplayBooks() {
  console.log('fetchAndDisplayBooks executed');
  fetch('http://localhost:3000/api/books')
    .then(response => response.json())
    .then(data => {
      const bookListElement = document.getElementById('bookList');
      data.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.dataset.bookId = book.id;
        bookElement.innerHTML = `
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Genre: ${book.genre}</p>
          <p>Condition: ${book.condition}</p>
          <p>Price: £ ${book.price}</p>
          <img src="../CoverImages/${book.image}" alt="Book Cover" width="150" height="200">
          <hr>
        `;
        bookListElement.appendChild(bookElement);
      });
      // Click event listener to book titles and images
      const bookElements = document.querySelectorAll('.book');
      bookElements.forEach(bookElement => {
        bookElement.addEventListener('click', () => {
          const bookId = bookElement.dataset.bookId;
          displayBookDetails(bookId);
        });
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Fetch books and display them on page load
document.addEventListener('DOMContentLoaded', fetchAndDisplayBooks);

// Function to get the book ID from the URL
function getBookIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Function to redirect to BookDetails.html with the book ID
function viewBookDetails(bookId) {
  window.location.href = `BookDetails.html?id=${bookId}`;
}

// Function to fetch book details from the backend
function fetchBookDetails(bookId) {
  fetch(`/api/books/${bookId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Book not found');
      }
      return response.json();
    })
    .then(book => displayBookDetails(book))
    .catch(error => console.error('Error fetching book details:', error));
}

// Function to display the book details on the page
function displayBookDetails(book) {
  const bookDetailsContainer = document.getElementById('bookDetails');
  bookDetailsContainer.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Genre: ${book.genre}</p>
    <p>Condition: ${book.condition}</p>
    <p>Trade For: ${book.trade_for}</p>
    <p>Price: $${book.price}</p>
    <img src="${book.image}" alt="${book.title} cover" width="200">
    <p>Description: ${book.description}</p>
  `;

  // Click event listener to the "Add to Cart" button
  const addToCartButton = document.getElementById('addToCartButton');
  addToCartButton.addEventListener('click', addToCartHandler);

  // Click event listener to the "Buy" button
  const buyButton = document.getElementById('payByCardButton');
  buyButton.addEventListener('click', () => {
    window.location.href = 'PaymentGateway.html';
  });
}

// Function to handle the "Add to Cart" button click
function addToCartHandler() {
  alert('Book added to cart!');
}

// Function to direct user to PaymentGateway to handle the "Buy" button click
function buyHandler() {
  window.location.href = 'PaymentGateway.html';
}

// Fetch book details and display them on BookDetails.html page on page load
document.addEventListener('DOMContentLoaded', () => {
  const bookId = getBookIdFromURL();
  fetchBookDetails(bookId);

  // Function to simulate processing payment and redirect to PaymentConfirmation.html
  function processPayment(event) {
    event.preventDefault();

    // Simulate the payment process
    showPaymentProcessing();

    // Simulate payment success after a short delay
    setTimeout(function () {
      redirectToConfirmation();
    }, 2000);

    return false;
  }

  // Function to redirect to PaymentConfirmation.html
  function redirectToConfirmation() {
    window.location.href = 'PaymentConfirmation.html';
  }

  // Function to render the PayPal button
  function renderPayPalButton() {
    paypal.Button.render({
      // Configure environment
      env: 'sandbox', // Replace 'sandbox' with 'production' for live transactions
      client: {
        sandbox: 'YOUR_PAYPAL_SANDBOX_CLIENT_ID',
        production: 'YOUR_PAYPAL_PRODUCTION_CLIENT_ID'
      },
      // Customize button (optional)
      locale: 'en_US',
      style: {
        size: 'small',
        color: 'gold',
        shape: 'pill',
      },
      // Enable Pay Now checkout flow (optional)
      commit: true,
      // Set up a payment
      payment: function (data, actions) {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: '0.01',
              currency: 'USD'
            }
          }]
        });
      },
      // Execute the payment
      onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function () {
          // Show a confirmation message to the buyer
          window.alert('Thank you for your purchase!');
        });
      }
    }, '#paypal-button');
  }

  // Function to show payment processing message
  function showPaymentProcessing() {
    const paymentResult = document.getElementById("paymentResult");
    paymentResult.innerText = "Processing payment...";
  }

  // Function to show payment success message and order summary
  function showPaymentSuccess(name, creditCardNumber) {
    const paymentResult = document.getElementById("paymentResult");
    const orderSummary = `
      Payment successful. Thank you for your purchase!

      Order Summary:
      Name: ${name}
      Credit Card Number: ${creditCardNumber}
    `;

    paymentResult.innerText = orderSummary;
  }

  showPaymentSuccess();

  // Attach the processPayment function to the "Pay by Card" button click event
  const payByCardButton = document.getElementById('payByCardButton');
  payByCardButton.addEventListener('click', buyHandler);

  // Call the function to render the PayPal button
  document.addEventListener('DOMContentLoaded', renderPayPalButton);
});


