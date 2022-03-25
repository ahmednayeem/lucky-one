import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect( () => {
        fetch ('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return (
        <div className='shop-container'>
           <div className='product-container mt-5'>
             {
                   products.map(product => <Product 
                    key={product.id}
                    product= {product}
                    ></Product>)
               }  
           </div>
           <div className='cart-container mt-4'>
               <h5>Order Summary</h5>
           </div>
        </div>
    );
};

export default Shop;