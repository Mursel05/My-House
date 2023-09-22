import React from "react";
import Navbar from "../components/Navbar";
import Detail from "../components/Detail";
import Footer from "../components/Footer";
import Header from "../components/Header";

const detail = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Detail />
      <Footer />
    </div>
  );
};

export default detail;
