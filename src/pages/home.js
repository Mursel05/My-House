import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";



const home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Main />
      <Footer />
    </div>
  );
};

export default home;
