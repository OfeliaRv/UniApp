import React from 'react';
import Navbar from '../components/layout/Navbar';

const Payment = () => {
    return (
        <div style={{height: '90vh'}}>
            <Navbar />
            <form className="payment-form">
                <div className="payment-heading">
                    <h6>Payment method</h6>
                    <hr />
                </div>
                <div id="payment-info">
                    <div className="payment-row">
                        <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
                        <input type="text" placeholder="MM/YYYY" required />
                        <input type="text" placeholder="CVV" required />
                    </div>
                </div>
                <div className="payment-heading">
                    <h6>Billing information</h6>
                    <hr />
                </div>
                <div id="billing-info">
                    <input type="text" placeholder="Company name" required />
                    <input type="text" placeholder="Full name" required />
                    <input type="text" placeholder="Address line 1" required />
                    <input type="text" placeholder="Address line 2" required />
                    <div className="payment-row">
                        <input type="text" placeholder="City" required />
                        <input type="text" placeholder="Country" required />
                    </div>
                    <div className="payment-row">
                        <input type="text" placeholder="Postal code" required />
                        <input type="text" placeholder="Phone number" required />
                    </div>
                    <input type="text" placeholder="Email address" required />
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Payment;
