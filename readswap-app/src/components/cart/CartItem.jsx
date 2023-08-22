import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import "./cart.css";

export const CartItem = (props) => {
    const { id, title, price, image } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
        console.log("cartItems in CartItem:", cartItems);

    return (
        <div className="cartItem">
            <img className="cover-cart" src={image} alt="Book Cover" />
            <div className="description">
                <p className="title">
                    <b>{title}</b>
                </p>
                <p className="price"> Price: ${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={cartItems[id] || 0}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};