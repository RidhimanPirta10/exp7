import React from 'react';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main className="container page">
      <HeroSection />
      <section>
        <h3>Overview</h3>
        <p>This experiment extends the multi-page app and adds global state and analytics.</p>
      </section>
    </main>
  );
}
