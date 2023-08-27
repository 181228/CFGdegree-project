import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/Page_LandingPage/LandingPage";
import AboutUs from "./pages/Page_AboutUs/AboutUs";
import BooksListing from "./pages/Page_BooksListing/BooksListing";
import BookDetails from "./pages/Page_BookDetails/BookDetails";
import ShoppingCart from "./pages/Page_ShoppingCart/ShoppingCart";
import PaymentGateway from './pages/Page_PaymentGateway/PaymentGateway';
import PaymentConfirmation from './pages/Page_PaymentConfirmation/PaymentConfirmation';
import Register from "./pages/Page_Register/Page_Register";
import Login from "./pages/Page_Login/Page_Login";
import Shipping from "./pages/Page_Shipping/Shipping";
import Forum from "./pages/Page_Forum/Page_Forum";
import Replies from "./pages/Page_Forum/Replies";
import BookUploadForm from "./pages/Page_BookUpload/BookUpload";
import {ShopContextProvider} from "./components/context/shop-context.jsx";  
import SearchResults from './components/SearchResults';

function App() {

  return (
    <div className="App">
      <ShopContextProvider> 
        <Router>
          <Header />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/bookslisting" element={<BooksListing />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/payment" element={<PaymentGateway />} />
              <Route path="/confirmation" element={<PaymentConfirmation />} />
              <Route exact path="/cart" element={<ShoppingCart />} />
              <Route exact path="/shipping" element={<Shipping/>} />
              <Route exact path="/register" element={<Register />}/>
              <Route exact path="/login" element={<Login />}/>
              <Route path="/forum" element={<Forum/>} />
              <Route path='/:id/replies' element={<Replies />} />
              <Route path='upload' element={<BookUploadForm/>} />
              <Route exact path="/register" element={<Register />} />
              <Route exaact path="/login" element={<Login />} />
              <Route path="/search-results" element={<SearchResults />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ShopContextProvider> 
    </div>
  );
}

export default App;