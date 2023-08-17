import "./shoppingcart.css";
import { Link } from "react-router-dom";

function ShoppingCart() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <title>Shopping Cart</title>
      <link rel="stylesheet" href="./styles.css" />
      <header>
        <div className="header">
          <img className="logo" src="" />
          <input type="text" placeholder="Search.." />
          <nav className="nav">
            <ul>
              <li>
                <Link id="homeLink" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mybooks">My Books</Link>
              </li>
              <li>
                <Link to="/forums">Forums</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
            </ul>
          </nav>
          <button id="contactButton" type="button">
            Contact Us
          </button>
          <button id="loginButton" type="button">
            Login
          </button>
        </div>
      </header>
      <h1>Shopping Cart</h1>
      <div className="shopping-cart">
        <div className="column-labels">
          <label className="book-image">Image</label>
          <label className="book-name">Book</label>
          <label className="book-price">Price</label>
          <label className="book-quantity">Quantity</label>
          <label className="book-removal">Remove</label>
          <label className="total-line-price">Total</label>
        </div>
        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal" />
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping" />
          </div>
          <div className="totals-item totals-item-total">
            <label>Total</label>
            <div className="totals-value" id="cart-total" />
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
