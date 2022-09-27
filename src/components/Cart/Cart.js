import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = total * 0.1

    return (
        <div className="cart-container">
            <div className="cart">
                <h3 className='cart-title'>Order summery</h3>
                <p>Selected items: {cart.length}</p>
                <p>Total price: ${total}</p>
                <p>Total shipping: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <p>Grand Total:{}</p>
            </div>
        </div>
    );
};

export default Cart;