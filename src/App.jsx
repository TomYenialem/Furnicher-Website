import "./App.css";
import Nav from "./Componenets/Navbar/Nav";


import Footer from "./Componenets/Footer/Footer";
import { Route, Routes, Router } from "react-router-dom";
import Shop from "./Componenets/Shop/Shop";
import Home from "./Componenets/Home/Home";
import Detail from "./Componenets/Details/Detail";
import ShopDetail from "./Componenets/ShopDetail/ShopDetail";
import Cart from "./Componenets/Cart/Cart";
import Contact from "./Componenets/Contacts/Contact";
import Login from "./Componenets/Login/Login";
import ToHome from './Componenets/ToHome/ToHome'
import ToOffice from "./Componenets/ToOffice/ToOffice";
import Scroll from "./Componenets/ScrollTop/Scroll";


function App() {
  return (
    <>
      <Nav />
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:productId" element={<Detail />} />;
        <Route path="/details2/:pid" element={<ShopDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/toHome" element={<ToHome />} />
        <Route path="/office" element={<ToOffice />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
