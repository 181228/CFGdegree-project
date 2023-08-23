import React from "react";
import './shoppingcart.css';
import { Cart } from '../../components/cart/Cart.jsx'

function ShoppingCart() {

    return (
        <div className="sc-container">
            < Cart />
        </div>
    );
}

export default ShoppingCart;
