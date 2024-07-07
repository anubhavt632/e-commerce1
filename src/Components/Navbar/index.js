import React, { useState } from "react";
import "./index.css";

const Navbar = (props) => {
  const { count } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <img className="web-logo" src="enpixels.png" alt="Logo" />
      <ul className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <li>Home</li>
        <li>Services</li>
        <li className="cart-menu-con">
          Cart <span className="cart-count">{count}</span>
        </li>
      </ul>
      <button className="hamburger" onClick={handleToggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
