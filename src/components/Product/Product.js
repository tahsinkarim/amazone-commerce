import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product
    const {handleAddToCart} = props
    return (
        <div className='product'>
            <img src={img} alt="product-img" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(ratings)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;