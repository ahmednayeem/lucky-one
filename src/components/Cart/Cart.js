import React from 'react';
import './Cart.css'

const Cart = ({cart,resetBtn}) => {
    const chooseOne = () =>{
        const arrLength = cart.length
        const randomProducts = Math.floor(Math.random() * arrLength)
        alert(cart[randomProducts].name)
    }
    

    return (
        <div className='cart'>
            <h5 className='fw-bold fs-4 mt-4'>Order Summary</h5>
            {cart.map(cartItem => <div className="cart-content" key={cartItem.id}> <img className='cart-image' alt='' src={cartItem.picture} /> <p> {cartItem.name}</p> </div>)}
            <div>
                <button className='choose' onClick={chooseOne}>Choose 1 For me</button>
                <br />
                <button className='reset' onClick={resetBtn}>Reset</button>
            </div>
        </div>
       
    );
};



export default Cart;