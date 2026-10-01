import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";

function Navbar({ darkMode, setDarkMode, cartCount }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <Link className="logo" to="/" onClick={close}>
        VELORA
      </Link>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={close}>
          Home
        </Link>

        <Link to="/watches" onClick={close}>
          Watches
        </Link>

        <a href="/#collections" onClick={close}>
          Collections
        </a>

        <a href="#about" onClick={close}>
          About
        </a>
      </div>

      <div className="nav-actions">
        {/* CART */}
        <Link className="icon-btn cart-button" to="/cart" aria-label="Cart">
          <ShoppingBag size={19} />

          {cartCount > 0 && <span>{cartCount}</span>}
        </Link>

        {/* DARK / LIGHT MODE */}
        <button
          className="icon-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        {/* MOBILE MENU */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
