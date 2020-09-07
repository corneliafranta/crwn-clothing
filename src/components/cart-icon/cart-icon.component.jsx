import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {createStructuredSelector} from "reselect";
import {ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.styles.sass';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (

    <div className='cartIcon' onClick={toggleCartHidden}
    >
        <ShoppingIcon className='shoppingIcon'/>
        <span className='itemCount'>{itemCount}</span>

    </div>
)
;

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
        itemCount:selectCartItemsCount
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
