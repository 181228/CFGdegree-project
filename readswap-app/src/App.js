import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Page_LandingPage/LandingPage";
import AboutUs from "./Page_AboutUs/AboutUs";
import BooksListing from "./Page_BooksListing/BooksListing";
import ShoppingCart from "./Page_ShoppingCart/ShoppingCart";
import RegistrationLogin from "./Page_RegistrationLogin/RegistrationLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/bookslisting" element={<BooksListing />} />
            <Route exact path="/shoppingcart" element={<ShoppingCart />} />
            <Route
              exact
              path="/registrationlogin"
              element={<RegistrationLogin />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
