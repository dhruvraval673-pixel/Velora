import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Collection from "./components/Collection";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Watches from "./components/Watches";
import Payment from "./components/Payment";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("velora-theme") !== "light",
  );

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("velora-cart")) || [];
      //to convert the stored JSON string back into a JavaScript array/object.
    } catch {
      return [];
    }
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";

    localStorage.setItem("velora-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("velora-cart", JSON.stringify(cart));
  }, [cart]);

  // ADD WATCH TO CART
  const addToCart = (watch) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === watch.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === watch.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          ...watch,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="app">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cartCount={cart.reduce((count, item) => count + item.quantity, 0)}
      />

      <main>
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />

                <Products onAdd={addToCart} />

                <Collection />

                <About />
              </>
            }
          />

          {/* WATCHES PAGE */}
          <Route path="/watches" element={<Watches onAdd={addToCart} />} />

          {/* CART PAGE */}
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                onContinueShopping={() => window.history.back()}
              />
            }
          />

          {/* PAYMENT PAGE */}
          <Route
            path="/payment"
            element={<Payment cart={cart} setCart={setCart} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
