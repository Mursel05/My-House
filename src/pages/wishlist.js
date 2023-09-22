import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wishlist from "../components/Wishlist";

const wishlist = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Header />
      <Wishlist />
      <Footer />
    </div>
  );
};

export default wishlist;
