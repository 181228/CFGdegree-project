import React, { createContext, useState, useEffect } from "react";
import { getProductsArray } from '../ProductsStore.jsx';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    const productsArray = getProductsArray();
    for (let i = 0; i < productsArray.length; i++) {
        const itemId = productsArray[i].id;
        cart[itemId] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
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
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = productsArray.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
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