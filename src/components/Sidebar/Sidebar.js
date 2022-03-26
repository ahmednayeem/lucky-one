import React from 'react';
import { useState } from 'react';

const Sidebar = (product) => {
    const [cart, setCart] = useState([product])


    const chooseOne = (product) => {

        const newCart = [cart,product]
       setCart(newCart);
     
    };


    return (
        <div>
            {
                   cart.map(product => <Sidebar
                    key={product.id}
                    product= {product}
                    chooseOne={chooseOne}
                   
                    ></Sidebar>)
               }  
            
        </div>
    );
};

export default Sidebar;