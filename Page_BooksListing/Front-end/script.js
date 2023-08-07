// Fetch BooksListing from the backend and display them on the page --- WORKING
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

      // Click event listener for book titles and images --- WORKING
      const bookElements = document.querySelectorAll('.book');
      bookElements.forEach(bookElement => {
        bookElement.addEventListener('click', () => {
          // alert('Book clicked!'); // Testing
          const bookId = bookElement.dataset.bookId;
          redirectToBookDetails(bookId);
        });
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Fetch books and display them on page load --- WORKING
document.addEventListener('DOMContentLoaded', fetchAndDisplayBooks);

// Function to get the book ID from the URL --- WORKING
function getBookIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Function to redirect to BookDetails.html with the book ID --- WORKING
function redirectToBookDetails(bookId) {
  const bookDetailsUrl = `BookDetails.html?id=${bookId}`;
  window.location.href = bookDetailsUrl;
}


// Function to fetch book details from the backend --- WORKING
function fetchBookDetails(bookId) {
  fetch(`/api/books/${bookId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Book not found');
      }
      return response.json();
    })
    .then(book => displayBookDetailsOnPage(book))
    .catch(error => console.error('Error fetching book details:', error));
}

// Function to display the book details on the page --- WORKING
function displayBookDetailsOnPage(book) {
  const bookDetailsContainer = document.getElementById('bookDetails');
  bookDetailsContainer.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Genre: ${book.genre}</p>
    <p>Condition: ${book.condition}</p>
    <p>Trade For: ${book.trade_for}</p>
    <p>Price: £ ${book.price}</p>
    <img src="${book.image}" alt="${book.title} cover" width="200">
    <p>Description: ${book.description}</p>
  `;

  // Click event listener to the "Add to Cart" button --- WORKING
  const addToCartButton = document.getElementById('addToCartButton');
  addToCartButton.addEventListener('click', addToCartHandler);

  // Click event listener to the "submitPaymentDetails" button --- WORKING
  const buyButton = document.getElementById('payByCardButton');
  buyButton.addEventListener('click', () => {
    window.location.href = 'PaymentGateway.html';
  });
}

// Function to handle the "Add to Cart" button click --- WORKING
function addToCartHandler() {
  alert('Book added to cart!');
}

// Function to direct user to PaymentGateway to handle the "submitPaymentDetails" button click --- WORKING
function buyHandler() {
  window.location.href = 'PaymentGateway.html';
}

// Fetch book details and display them on BookDetails.html page on page load --- WORKING
document.addEventListener('DOMContentLoaded', () => {
  const bookId = getBookIdFromURL();
  fetchBookDetails(bookId);

  // Function to show payment processing message
  function showPaymentProcessing() {
    const paymentResult = document.getElementById("paymentResult");
    if (paymentResult) {
      paymentResult.innerText = "Processing payment...";
    }
  }

  // Attach event listener to the "PsubmitPaymentDetails" button
  const submitPaymentDetails = document.getElementById('submitPaymentDetails');
  if (submitPaymentDetails) {
    submitPaymentDetails.addEventListener('click', processPayment);
  }

  // Function to redirect to PaymentConfirmation.html
  function redirectToConfirmation() {
    window.location.href = 'PaymentConfirmation.html';
  }
  
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

  // Function to show payment success message and order summary
  function showPaymentSuccess() {
    const paymentResult = document.getElementById("paymentResult");
    const orderSummary = `
      Payment successful. Thank you for your purchase!
    `;

    paymentResult.innerText = orderSummary;
  }

  showPaymentSuccess();

  // Call the function to render the PayPal button
  document.addEventListener('DOMContentLoaded', renderPayPalButton);
});


