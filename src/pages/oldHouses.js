import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OldHouses from "../components/OldHouses";
import Header from "../components/Header";

const oldHouses = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <OldHouses />
      <Footer />
    </div>
  );
};

export default oldHouses;
