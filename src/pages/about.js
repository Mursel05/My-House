import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
const about = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default about;
