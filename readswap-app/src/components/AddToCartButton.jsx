import React, { useContext } from "react";
import { ShopContext } from "./context/shop-context.jsx";

const AddToCartButton = (props) => {
    const { id, title, price, image } = props;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = () => {
        console.log("Adding to cart:", id, title, price, image);
        addToCart(id);
        alert(`${title} ${image} for £${price} added to cart!`);
    };

    return (
        <button className="addToCartBut" onClick={handleAddToCart}>
            CART
        </button>
    );
};

export default AddToCartButton;

