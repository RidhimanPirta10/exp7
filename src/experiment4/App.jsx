import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppProvider } from './context/AppContext';
import store from './redux/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import UsersPage from './pages/UsersPage';
import './index.css';

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <BrowserRouter>
          <div className="app-root">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/users" element={<UsersPage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AppProvider>
    </Provider>
  );
}
