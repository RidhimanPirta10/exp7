import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif'
  }
});

const Experiment2App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <HeroSection />
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Experiment2App;