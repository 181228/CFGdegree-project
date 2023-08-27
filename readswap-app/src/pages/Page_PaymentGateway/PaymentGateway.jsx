import React, { useState } from 'react';
import "./paymentgateway.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
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

        const initialOptions = {
            clientId: "test",
            currency: "USD",
            intent: "capture",
        };

    return (
        <div>
            <div className='pay-layout'>
                <br></br>
                <br></br>
                <h2 className='pay-h2'>Payment Details</h2>
                <div className="pay-container">
                    <form className="pay-details">
                        <br></br>
                        <label className="pay-label" htmlFor="name">Name on Card:</label>
                        <input className="pay-input" type="text" id="name" name="name" pattern="^[A-Za-z]+\s[A-Za-z]+$" required placeholder="Jack Allen" />
                        <label className="pay-label" htmlFor="cardNumber">Card Number:</label>
                        <input className="pay-input" type="text" id="cardNumber" name="cardNumber" pattern="^\d{16}$" required placeholder="1234 5678 9012 3456" />
                        <label className="pay-label" htmlFor="expiryDate">Expiry Date:</label>
                        <input className="pay-input" type="text" id="expiryDate" name="expiryDate" pattern="^(0[1-9]|1[0-2])\/\d{2}$" required placeholder="MM/YY" />
                        <label className="pay-label" htmlFor="cvv">CVV:</label>
                        <input className="pay-input" type="text" id="cvv" name="cvv" pattern="^\d{3}$" required placeholder="123" />

                        <div className="buttons-container">
                            <button className="subBut" type="button" id="submitPaymentDetails" onClick={handlePaymentSubmit}>SUBMIT</button>
                            <PayPalScriptProvider options={initialOptions}>
                                <PayPalButtons />
                            </PayPalScriptProvider>
                        <div id="paymentResult">
                            {paymentSuccess && <Navigate to="/confirmation" />}
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PaymentGateway;