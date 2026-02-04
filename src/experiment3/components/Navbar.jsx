import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="exp3-navbar">
      <div className="brand">Exp 3: Portfolio</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
};

export default Navbar;
