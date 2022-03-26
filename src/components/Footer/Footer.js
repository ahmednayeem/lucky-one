import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
            <h1 className='question'> How React Works ?</h1>
            <p className='customize'><span className='fw-bold'>Ans: </span>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. Most front-end JavaScript developers pair it with frameworks like Angular and Vue to create complex functions.</p>
            </div>
            <div>
                <h1 className='question'>Difference between props and state</h1>
                <p className='customize'><span className='fw-bold'>Ans: </span>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible.
                    <br />
                 Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                </p>
            </div>
        </div>
    );
};

export default Footer;