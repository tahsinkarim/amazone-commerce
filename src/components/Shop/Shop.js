import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        console.log(newCart)
        setCart(newCart)
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
            <Cart cart={cart} ></Cart>
        </div>
    );
};

export default Shop;