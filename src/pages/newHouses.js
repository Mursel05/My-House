import React from "react";
import Navbar from "../components/Navbar";
import NewHouses from "../components/NewHouses";
import Footer from "../components/Footer";
import Header from "../components/Header";

const newHouses = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <NewHouses />
      <Footer />
    </div>
  );
};

export default newHouses;
