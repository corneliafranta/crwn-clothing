import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import './stripe-button.styles.sass'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HPTaBFt76OAre1hUparkPKs72e3x1NuIYPgGPZQllBPKeWkAR4nkBlPHKNhF8LbPtyLFJcP9ul1x0AdaGZMUPwp00D8c68P4n'

    const onTocken = token => {
        console.log(token)
        alert('Payment Success');
    }
return(
    <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image = 'https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel = 'Pay Now'
    token={onTocken}
    stripeKey={publishableKey}
    />
);
};
export default StripeCheckoutButton
