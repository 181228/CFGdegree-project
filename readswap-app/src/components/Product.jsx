import React, { useContext } from "react";
import { ShopContext } from "./context/shop-context.jsx";
import AddToCartButton from "./AddToCartButton";

export const Product = (props) => {
    const { id, title, price, image } = props.data;
    const { removeFromCart, cartItems } = useContext(ShopContext);

    const cartItemCount = cartItems[id];
    const showAddToCartButton = props.showAddToCartButton;

    return (
        <div className="product">
            {/* CONDITIONAL RENDERING OF BUTTON */}
            {showAddToCartButton && <AddToCartButton itemId={id} />}
            {/* OTHER INFORMATION */}
            <img src={image} alt="book cover" />
            <div className="description">
                <p>
                    <b>{title}</b>
                </p>
                <p> ${price}</p>
            </div>
            {/* CONDITIONAL RENDERING OF BUTTON */}
            {!showAddToCartButton && cartItemCount > 0 ? (
                <button
                    className="addToCartBttn"
                    onClick={() => removeFromCart(id)}
                >
                    Remove From Cart
                </button>
            ) : null}
        </div>
    );
};
