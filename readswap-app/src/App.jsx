import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Page_LandingPage/LandingPage";
import AboutUs from "./Page_AboutUs/AboutUs";
import BooksListing from "./Page_BooksListing/BooksListing";
import BookDetails from "./Page_BookDetails/BookDetails";
import ShoppingCart from "./Page_ShoppingCart/ShoppingCart";
import PaymentGateway from './Page_PaymentGateway/PaymentGateway';
import PaymentConfirmation from './Page_PaymentConfirmation/PaymentConfirmation';
import RegistrationLogin from "./Page_RegistrationLogin/RegistrationLogin";
import {ShopContextProvider} from "./context/shop-context.jsx"  

function App() {

  return (
    <div className="App">
<<<<<<< Updated upstream
      <Router>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/bookslisting" element={<BooksListing />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/confirmation" element={<PaymentConfirmation />} />
            <Route exact path="/shoppingcart" element={<ShoppingCart />} />
            <Route exact path="/registrationlogin" element={<RegistrationLogin />}/>
          </Routes>
        </div>
      </Router>
=======
      <ShopContextProvider> 
        <Router>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/bookslisting" element={<BooksListing />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/payment" element={<PaymentGateway />} />
              <Route path="/confirmation" element={<PaymentConfirmation />} />
              <Route exact path="/cart" element={<ShoppingCart />} />
              <Route exact path="/registrationlogin" element={<RegistrationLogin />}/>
            </Routes>
          </div>
        </Router>
      </ShopContextProvider> 
>>>>>>> Stashed changes
    </div>
  );
}

export default App;