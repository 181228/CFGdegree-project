import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Page_LandingPage/LandingPage";
import AboutUs from "./Page_AboutUs/AboutUs";
import BooksListing from "./Page_BooksListing/BooksListing";
import BookDetails from './Page_BookDetails/BookDetails';
import ShoppingCart from "./Page_ShoppingCart/ShoppingCart";
import PaymentGateway from './Page_PaymentGateway/PaymentGateway';
import PaymentConfirmation from './Page_PaymentConfirmation/PaymentConfirmation';
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
            <Route path="/book/:id" component={BookDetails} />
            <Route path="/payment" component={PaymentGateway} />
            <Route path="/confirmation" component={PaymentConfirmation} />
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

