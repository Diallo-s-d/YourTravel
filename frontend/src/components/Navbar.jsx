// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="header">
      <nav>
        <div className="menu-items">
          <ul className="menu-list">
            <div className="logo">
              <img src="src/assets/images/logo.png" alt="logo" />
            </div>
            <li>
              <Link to="/">Nos bon plans</Link>
            </li>
            {/* <li>
              <Link to="/results">Nos bon plans</Link>
              {/* <Link to="/login">Se connecter</Link> */}
            {/* </li> */}
            <li>
              <Link to="/login" className="login-icon">
                <span>Se connecter</span>
              </Link>
            </li>
            <li>
              <Link to="backoffice">Backoffice</Link>
            </li>
          </ul>
        </div>
      </nav>
      <SearchBar />
    </div>
  );
}
