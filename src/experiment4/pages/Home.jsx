import React from 'react';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main className="container page">
      <HeroSection />
      <section>
        <h3>Overview</h3>
        <p>This experiment (now version 5) extends the multi‑page app with Redux Toolkit for state, the Context API for theme/user, and memoized reports.</p>
      </section>
    </main>
  );
}
