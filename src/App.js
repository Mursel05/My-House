import React from "react";
import { CartProvider } from "react-use-cart";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NewHouses from "./pages/newHouses";
import OldHouses from "./pages/oldHouses";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import { WishlistProvider } from "react-use-wishlist";
import Form from "./pages/form";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <WishlistProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Wishlist" element={<Wishlist />} />
              <Route path="/About Us" element={<About />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/New Houses" element={<NewHouses />} />
              <Route path="/Old Houses" element={<OldHouses />} />
              <Route path="/Old Houses/:id" element={<Detail />} />
              <Route path="/New Houses/:id" element={<Detail />} />
              <Route path="/Sign In" element={<Form />} />
              <Route path="*" element={<NotFound />} />
            </Routes>{" "}
          </WishlistProvider>{" "}
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
