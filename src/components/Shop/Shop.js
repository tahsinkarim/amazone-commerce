import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product)
    }
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map( product => 
                    <Product
                         key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        > 
                    </Product>)
                }
            </div>
            <div className="cart-container">
                order summery
            </div>
        </div>
    );
};

export default Shop;