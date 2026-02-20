import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Analytics from './pages/Analytics';
import './index.css';

export default function Experiment4App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="app-root">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
