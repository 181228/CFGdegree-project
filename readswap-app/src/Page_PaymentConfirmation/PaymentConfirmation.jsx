import React, { useEffect, useState } from 'react';
import "./paymentconfirmation.css";
import Header from '../Header';
import Footer from '../Footer';

function PaymentConfirmation() {
    const [paymentProcessing, setPaymentProcessing] = useState(true);

    useEffect(() => {
        // SIMULATE PAYMENT PROCESS AFTER SHORT DELAY
        const delay = 2000;
        const timer = setTimeout(() => {
            setPaymentProcessing(false);
        }, delay);

        return () => clearTimeout(timer);

    }, []);


    return (
        <div>
            <Header />
                <h1>Payment Confirmation</h1>
                <div className='confirmation-layout'>
                    <div className="confirmation-container">
                        <div className="confirmation-details">
                            <div>
                                {paymentProcessing ? <p>Processing payment...</p> : <p>Awesome! 
                                Payment received. 
                                Package on the way! 📦</p>}
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default PaymentConfirmation;