import React from 'react';
import "./paymentgateway.css";
import Header from '../Header';
import Footer from '../Footer';
import { PayPalButton } from "react-paypal-button-v2";

function PaymentGateway() {
    const onSuccess = (details, data) => {
        console.log("Transaction completed by " + details.payer.name.given_name);
        showPaymentSuccess();
    };

    const onError = (err) => {
        console.error(err);
    };

    const renderPayPalButton = () => (
        <PayPalButton
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '0.01',
                        },
                    }],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(function (details) {
                    onSuccess(details, data);
                });
            }}
            onError={onError}
        />
    );

    const showPaymentSuccess = () => {
        const paymentResult = document.getElementById("paymentResult");
        const orderSummary = `
            Payment successful. Thank you for your purchase!
        `;

        paymentResult.innerText = orderSummary;
    };

    return (
        <div>
            <Header />
            <h1>Payment Details</h1>
                <div className='pay-layout'>
                    <div className="pay-container">
                        <form className="pay-details">
                            <label htmlFor="name">Name on Card:</label>
                            <input type="text" id="name" name="name" pattern="^[A-Za-z]+\s[A-Za-z]+$" required placeholder="Jack Allen" />
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input type="text" id="cardNumber" name="cardNumber" pattern="^\d{16}$" required placeholder="1234 5678 9012 3456" />
                            <label htmlFor="expiryDate">Expiry Date:</label>
                            <input type="text" id="expiryDate" name="expiryDate" pattern="^(0[1-9]|1[0-2])\/\d{2}$" required placeholder="MM/YY" />
                            <label htmlFor="cvv">CVV:</label>
                            <input type="text" id="cvv" name="cvv" pattern="^\d{3}$" required placeholder="123" />

                            <div className="buttons-container">
                            <button className="subBut" type="button" id="submitPaymentDetails">Submit</button>
                            <div id="paypal-button-container">
                                {renderPayPalButton()}
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default PaymentGateway;