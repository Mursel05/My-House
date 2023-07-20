import React from "react";
import Navbar from "../components/Navbar";
import NewHouses from "../components/NewHouses";
import Footer from "../components/Footer";

const newHouses = () => {
  return (
    <div>
      <Navbar />
      <NewHouses />
      <Footer />
    </div>
  );
};

export default newHouses;
