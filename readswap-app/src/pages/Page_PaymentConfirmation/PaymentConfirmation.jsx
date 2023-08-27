import React, { useEffect, useState } from 'react';
import "./paymentconfirmation.css";

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
            <div className="pconf-container">
                <br></br>
                <br></br>
                <h2 className='pconf-h2'>Payment Confirmation</h2>
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
            </div>
        </div>
    );
};

export default PaymentConfirmation;