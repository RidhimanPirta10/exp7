import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Experiment3App from "./experiment3/App";
import "./styles/app.css";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Header setPage={setPage} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "exp3" && <Experiment3App />}

      <Footer />
    </div>
  );
};

export default App;
