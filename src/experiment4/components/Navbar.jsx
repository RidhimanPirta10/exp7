import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';
import ThemeToggle from './ThemeToggle';

// UID and name to display (update if you want different values)
const UID = '23BAI70112';
const NAME = 'Ridhiman Pirta';

export default function Navbar() {
  const { theme } = useAppContext();
  const favCount = useSelector((state) => state.favorites.items.length);

  return (
    <header className={`nav ${theme}`}>
      <div className="container nav-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 className="brand">Experiment 5</h1>
          <div className="uid-badge">
            <strong>{UID}</strong> — {NAME}
          </div>
        </div>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''}>Analytics</NavLink>
          <NavLink to="/reports" className={({ isActive }) => isActive ? 'active' : ''}>Reports</NavLink>
        </nav>

        <div className="nav-actions">
          <span className="fav-count">Favorites: {favCount}</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
