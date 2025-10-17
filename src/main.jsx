import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./Cartcontext"; 

import App from "./App.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Shopping from "./Shopping.jsx";
import Categories from "./Categories.jsx";
import About from "./About.jsx";
import CartPage from "./CartPage.jsx";
import CheckoutPage from "./CheckoutPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      
      <CartProvider>
        <Header />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Shopping" element={<Shopping />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<CartPage />} /> 
          <Route path="/Checkout" element={<CheckoutPage />} /> 
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
