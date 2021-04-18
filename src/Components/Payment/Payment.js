import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from '../PaymentForm/SplitCardForm';

const stripePromise = loadStripe('pk_test_51IeGkUIJjY496rJY5fXTjjWxmP4yBXsmE6tCDOygrR5K1IrVz6M2ZePpLUj5ZjXxsk90blS93NjD2eMa1MBNGLJM00xAn39p2O');

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm></SplitCardForm>

        </Elements>
    );
};

export default Payment;