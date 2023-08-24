import React, { createContext, useState, useEffect } from "react";
import { getProductsArray } from '../ProductsStore.jsx';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(new Set());
    const [productsArray, setProductsArray] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getProductsArray();
            setProductsArray(fetchedProducts);
        }
        fetchProducts();
    }, []);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId of cartItems) {
            const itemInfo = productsArray.find((product) => product.id === Number(itemId));
            if (itemInfo) {
                totalAmount += itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        console.log("Adding to cart:", itemId);
        setCartItems((prev) => new Set(prev).add(itemId));
    };
    
    const removeFromCart = (itemId) => {
        console.log("Removing from cart:", itemId);
        setCartItems((prev) => {
            const newCart = new Set(prev);
            newCart.delete(itemId);
            return newCart;
        });
    };    

    const updateCartItemCount = (newAmount, itemId) => {
        // SHALL BE EMPTY CUZ EACH ITEM AMOUNT IN SHOP IS ALWAYS 1
    };

    const checkout = () => {
        setCartItems(new Set());
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};