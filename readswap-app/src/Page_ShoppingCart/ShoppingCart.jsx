import React, { useContext } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ShopContext } from "../context/shop-context.jsx";
import "./shoppingcart.css";

function ShoppingCart() {
    const { cartItems = {}, products = [], removeFromCart = () => {} } = useContext(ShopContext);

    const calculateTotalPrice = () => {
        let total = 0;
        for (const productId in cartItems) {
        const product = products.find((p) => p.id === Number(productId));
        if (product) {
            total += product.price * cartItems[productId];
        }
        }
        return total;
    };

    return (
        <div>
        <Header />
        <h1>Shopping Cart</h1>
        <div className="shopping-cart">
            <div className="columns">
            {Object.keys(cartItems).map((productId) => {
                const product = products.find((p) => p.id === Number(productId));
                return product ? (
                <div key={productId} className="book-row">
                    <div className="book-image">
                    <img
                        src={`http://localhost:3000/CoverImages/${product.image}`}
                        alt={product.title + " cover"}
                        width="100"
                    />
                    </div>
                    <div className="book-name">{product.title}</div>
                    <div className="book-price">£ {product.price}</div>
                    <div className="book-quantity">{cartItems[productId]}</div>
                    <button
                    className="book-removal"
                    onClick={() => removeFromCart(productId)}
                    >
                    Remove
                    </button>
                </div>
                ) : null;
            })}
            <div className="totals">
            <div className="totals-item">
                <label>Subtotal</label>
                <div className="totals-value" id="cart-subtotal">
                {calculateTotalPrice()} {/* DISPLAYING SUBTOTAL */}
                </div>
            </div>
            <div className="totals-item">
                <label>Shipping</label>
                <div className="totals-value" id="cart-shipping" />
            </div>
            <div className="totals-item totals-item-total">
                <label>Total</label>
                <div className="totals-value" id="cart-total">
                {calculateTotalPrice()} {/* DISPLAYING TOTAL */}
                </div>
            </div>
            <button className="checkout">Checkout</button>
            </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default ShoppingCart;
