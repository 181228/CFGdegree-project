import React from "react";
import './shoppingcart.css';
import { Cart } from '../../components/cart/Cart.jsx'

function ShoppingCart() {

    return (
        <div>
            <div className='sc-container'>
                < Cart/>
            </div>
        </div>
    );
}

export default ShoppingCart;
