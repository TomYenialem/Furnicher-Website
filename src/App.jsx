import "./App.css";
import Nav from "./Componenets/Navbar/Nav";
import { Toaster } from "react-hot-toast";

import Footer from "./Componenets/Footer/Footer";
import { Route, Routes, Router, useNavigate } from "react-router-dom";
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
import { useContext, useEffect } from "react";
import { auth } from "./Componenets/Utility/Firebase";
import { contextApi } from "./Componenets/Context/Context";
import Payment from "./Componenets/Payment/Payment";
import Protected from "./Componenets/ProtectedRoute/Protected";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


function App() {

  const {setAuthUser}=useContext(contextApi)
  useEffect(()=>{
auth.onAuthStateChanged(authUser=>{
  if(authUser){
    setAuthUser(authUser);
    console.log(authUser);
  }else{
    console.log("no user is logged in");
    setAuthUser(null);
  }

})
  },[])

const publicKey = loadStripe(
  "pk_test_51QcSTFA2AFtkKJ4AGcx7m8pAmX1q590ZtjkxAqJvgW9hqFDCC4vKMcvI4658peUUOIUceG4hwwWL1Sf9e1xj6P4d00j1Nl7Jfi"
);
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
        <Route
          path="/payments"
          element={
            // <Protected msg={'please login to pay'} rediretTo={'/payments'}>
            <Elements stripe={publicKey}>
              <Payment />
            </Elements>
            // </Protected>
          }
        />
      </Routes>
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}

export default App;
