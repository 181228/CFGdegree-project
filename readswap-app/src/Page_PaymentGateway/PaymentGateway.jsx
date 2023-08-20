import React, { useState } from 'react';
import "./paymentgateway.css";
import Header from '../Header';
import Footer from '../Footer';
// import { PayPalButton } from "react-paypal-button-v2";
import { Navigate } from 'react-router-dom';

function PaymentGateway() {
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const onSuccess = () => {
        setPaymentSuccess(true);
    };


    const handlePaymentSubmit = () => {
        
        const nameInput = document.getElementById("name");
        const cardNumberInput = document.getElementById("cardNumber");
        const expiryDateInput = document.getElementById("expiryDate");
        const cvvInput = document.getElementById("cvv");

        if (!nameInput.value || !cardNumberInput.value || !expiryDateInput.value || !cvvInput.value) {
            alert("Please fill in all fields.");
            return;
        }

        onSuccess();
        setPaymentSuccess(true);
    };

    // const renderPayPalButton = () => (
    //     <PayPalButton
    //     amount="0.01"
    //     // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
    //     onSuccess={(details, data) => {
    //         alert("Transaction completed by " + details.payer.name.given_name);

    //       // OPTIONAL: Call your server to save the transaction
    //         return fetch("/paypal-transaction-complete", {
    //             method: "post",
    //             body: JSON.stringify({
    //                 orderID: data.orderID
    //                 })
    //         });
    //     }}
    //     />
    // );

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
                                <button className="subBut" type="button" id="submitPaymentDetails" onClick={handlePaymentSubmit}>Submit</button>
                                {/* <div id="paypal-button-container">
                                    {renderPayPalButton()}
                            </div> */}
                            <div id="paymentResult">
                                {paymentSuccess && <Navigate to="/confirmation" />}
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