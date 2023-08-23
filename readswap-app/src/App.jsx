import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar01";
import Footer from "./components/footer/Footer"
import LandingPage from "./pages/Page_LandingPage/LandingPage";
import AboutUs from "./pages/Page_AboutUs/AboutUs";
import BooksListing from "./pages/Page_BooksListing/BooksListing";
import BookDetails from "./pages/Page_BookDetails/BookDetails";
import ShoppingCart from "./pages/Page_ShoppingCart/ShoppingCart";
import PaymentGateway from './pages/Page_PaymentGateway/PaymentGateway';
import PaymentConfirmation from './pages/Page_PaymentConfirmation/PaymentConfirmation';
import RegistrationLogin from "./pages/Page_RegistrationLogin/RegistrationLogin";
import Forum from "./pages/Page_Forum/Page_Forum"
import {ShopContextProvider} from "./components/context/shop-context.jsx"  

function App() {

  return (
    <div className="App">
      <ShopContextProvider> 
        <Router>
          <Navbar />
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
              <Route path="/forum" element={<Forum/>} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ShopContextProvider> 
    </div>
  );
}

export default App;