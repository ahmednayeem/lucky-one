import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, picture, price} = props.product
    return (
        <div className='product'>
            <img src= {picture} alt=""></img>
            

        </div>
    );
};

export default Product;