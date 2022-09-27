import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {name, img, seller, price, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="product-img" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <span>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </span>
            </button>
        </div>
    );
};

export default Product;