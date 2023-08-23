import React from "react";
import Contact from "./pages/Contact/Contact.jsx";
import Products from "./pages/Products/Products.jsx";
import About from "./pages/About/About.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Account from "./pages/Account/Account.jsx";
import { Routes, Route } from "react-router-dom";
import OrderHistory from "./pages/orderHistory/OrderHistory.jsx";
import CreateProduct from "./pages/CreateProduct/CreateProduct.jsx";
import LoginVerify from "./pages/Login/LoginVerify.jsx";

const App = () => {
  const isLoggedIn = localStorage.getItem("uid");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/verify" element={<LoginVerify />} />
        {isLoggedIn!==null ? (
          <>
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/create" element={<CreateProduct />} />
          </>
        ) : (
          <>
            <Route path="/account" element={<Login />} />
            <Route path="/cart" element={<Login />} />
            <Route path="/checkout" element={<Login />} />
            <Route path="/orders" element={<Login />} />
            <Route path="/create" element={<Login />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
