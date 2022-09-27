import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props
    return (
        <div className="cart-container">
            <h4>Order summery</h4>
            <p>Selected items: {cart.length}</p>
        </div>
    );
};

export default Cart;