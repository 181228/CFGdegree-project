// Function to simulate processing payment
function processPayment(event) {
    event.preventDefault();

    // Get the payment form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const creditCardNumber = document.getElementById("creditCardNumber").value;
    const expirationDate = document.getElementById("expirationDate").value;

    // Simulate the payment process
    showPaymentProcessing();

    // Simulate payment success after a short delay
    setTimeout(function () {
        showPaymentSuccess(name, email, address, creditCardNumber, expirationDate);
        redirectToConfirmation();
    }, 2000);

    return false;
}

// Function to show payment processing message
function showPaymentProcessing() {
    const paymentResult = document.getElementById("paymentResult");
    paymentResult.innerText = "Processing payment...";
}

// Function to show payment success message and order summary
function showPaymentSuccess(name, email, address, creditCardNumber, expirationDate) {
    const paymentResult = document.getElementById("paymentResult");
    const orderSummary = `
        Payment successful. Thank you for your purchase!

        Order Summary:
        Name: ${name}
        Email: ${email}
        Address: ${address}
        Credit Card Number: ${creditCardNumber}
        Expiration Date: ${expirationDate}
        `;

    paymentResult.innerText = orderSummary;
}

// Function to redirect to the confirmation page
function redirectToConfirmation() {
    // Replace 'confirmation.html' with the actual filename of your confirmation page
    window.location.href = 'confirmation.html';
}
