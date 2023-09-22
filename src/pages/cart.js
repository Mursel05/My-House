import React from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
const cart = () => {
  return (
    <div>
      <Navbar />
      <Header/>

      <Cart />
      <Footer />
    </div>
  );
};

export default cart;
