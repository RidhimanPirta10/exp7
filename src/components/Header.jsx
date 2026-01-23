import React from "react";
import "./Header.css";

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <h1 className="logo">My React SPA</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => setPage("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setPage("about")}>About</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
