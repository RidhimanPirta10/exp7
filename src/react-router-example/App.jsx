import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <nav
        style={{
          padding: "1rem",
          borderBottom: "1px solid #ddd",
          marginBottom: "1.5rem",
        }}
      >
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Optional 404 route: */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1.5rem" }}>
              <h1>404 — Page not found</h1>
              <p>The page you are looking for does not exist.</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}
