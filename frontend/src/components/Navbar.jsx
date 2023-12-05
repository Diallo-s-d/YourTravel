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
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/results">Nos bon plans</Link>
              {/* <Link to="/login">Se connecter</Link> */}
            </li>
            <li>
              <Link to="/login" className="login-icon" Nos bon plans>
                <span>Se connecter</span>
                {/* <div className="icon-text">
                <img src="src/assets/images/connecter.png" alt="Se connecter" />
              </div> */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <SearchBar />
    </div>
  );
}
