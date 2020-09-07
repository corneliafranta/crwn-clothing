import React from 'react'
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.sass'

const CartDropdown = () => (

    <div className='cartDropdown'>
        <div className='cartItems'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)
export default CartDropdown
