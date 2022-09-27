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
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-cart-fill" 
                        viewBox="0 0 16 16"> 
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> 
                     </svg>
                </span>
            </button>
        </div>
    );
};

export default Product;