import React from 'react'
import './checkout.styles.sass'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

const CheckoutPage = ({cartItems, total}) => (
   <div className='checkoutPage'>
       <div className='checkoutHeader'>
           <div className='headerBlocks'>
               <span>Product</span>
           </div>
           <div className='headerBlocks'>
               <span>Description</span>
           </div>
           <div className='headerBlocks'>
               <span>Quantity</span>
           </div>
           <div className='headerBlocks'>
               <span>Price</span>
           </div>
           <div className='headerBlocks'>
               <span>Remove</span>
           </div>
       </div>
       {
           cartItems.map(cartItem =>
           <CheckoutItem key={cartItem.id}cartItem={cartItem}/>
           )
       }

       <div className='total'>TOTAL: ${total}</div>
       <div className='test-warning'>*Please use the following test credit card for payments
       <br/>4242 4242 4242 4242 - Exp: 01/21 - CVV: 123

       </div>
       <StripeCheckoutButton price={total}/>
   </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
