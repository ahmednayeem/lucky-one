import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart }) => {
    const {name, picture, price} = product;
    return (
        <div className='product'>
            <img src= {picture} alt=""></img>
           <div>
           <p className='fs-4 fw-bold mt-4'> {name}</p>
            <p className='fs-5 fw-bold'> Price: {price} </p>
           </div>
           <button onClick={() => handleAddToCart(product)} className='btn-cart'>
               <p className='fs-6 mx-2 mt-3'> Add to Cart </p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;