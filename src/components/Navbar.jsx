
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          📚 BookNest
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="navbar-links"
          className={`navbar-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/books" onClick={closeMenu}>
            Books
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/features" onClick={closeMenu}>
            Features
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
