import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.styles.sass';

const CartIcon = ({ toggleCartHidden }) => (

    <div className='cartIcon' onClick={toggleCartHidden}
    >
        <ShoppingIcon className='shoppingIcon'/>
        <span className='itemCount'>0</span>

    </div>
)
;

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);
