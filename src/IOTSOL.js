import React from 'react';

function Products(props) {
    return (
        <div>
            <ol>
                <li> <h1> {props.product1} </h1> </li>
                <li> <h1> {props.product2} </h1> </li>
                <li> <h1> {props.product3} </h1> </li>
            </ol>
        </div>
    )
}

export default Products
