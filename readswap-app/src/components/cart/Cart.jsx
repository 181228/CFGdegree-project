import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shop-context.jsx";
import { getProductsArray } from '../ProductsStore.jsx';
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    console.log("cartItems:", cartItems);

    const navigate = useNavigate();
    const [cartItemsWithQuantity, setCartItemsWithQuantity] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const fetchedProducts = await getProductsArray();

            const filteredItems = fetchedProducts.filter(product => {
                const cartItemQuantity = cartItems[product.id];
                console.log("cartItemQuantity:", cartItemQuantity);
                return cartItemQuantity !== undefined ? cartItemQuantity > 0 : false;
            });
            
            console.log("Filtered Items:", filteredItems);
            setCartItemsWithQuantity(filteredItems);
        };

        fetchCartItems();
    }, [cartItems]);

    return (
        <div className="cart">
            <div>
                <h1 className="h1-cart">Book Cart</h1>
            </div>
            <div className="cart">
                {cartItemsWithQuantity.map(product => (
                    <CartItem key={product.id} data={product} />
                ))}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p> Subtotal: ${totalAmount} </p>
                    <button onClick={() => navigate("/bookslisting")}> Shop Onward </button>
                    <button
                        onClick={() => {
                            checkout();
                            navigate("/shipping");
                        }}
                    >
                        {" "}
                        Checkout{" "}
                    </button>
                </div>
            ) : (
                <h2> Your Shopping Cart is Empty</h2>
            )}
        </div>
    );
};
