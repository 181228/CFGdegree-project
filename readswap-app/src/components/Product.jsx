import React, { useContext } from "react";
import { ShopContext } from "./context/shop-context.jsx";
import AddToCartButton from "./AddToCartButton";

export const Product = (props) => {
    const { id, title, price, image, showAddToCartButton } = props;
    const { removeFromCart, cartItems } = useContext(ShopContext);

    const cartItemInCart = cartItems.has(id);

    return (
        <div className="product">
            {/* CONDITIONAL RENDERING OF BUTTON */}
            {showAddToCartButton && (
                <AddToCartButton
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                />
            )}
            {/* OTHER INFORMATION */}
            {!showAddToCartButton && (
                <div>
                    <img src={image} alt="book cover" />
                    <div className="description">
                        <p>
                            <b>{title}</b>
                        </p>
                        <p>{price}</p>
                    </div>
                    {cartItemInCart ? (
                        <button
                            className="addToCartBttn"
                            onClick={() => removeFromCart(id)}
                        >
                            Remove From Cart
                        </button>
                    ) : null}
                </div>
            )}
        </div>
    );
};
