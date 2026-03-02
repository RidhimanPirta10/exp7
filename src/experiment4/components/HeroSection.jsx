import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero container">
      <div className="hero-inner">
        <div>
          <h2>Welcome to Experiment 5</h2>
          <p className="lead">Redux Toolkit + Context + useMemo in a scalable multi‑page app.</p>
          <p className="small">
            This update adds a Redux store for favorites, a global theme/user context,
            memoized reports, and an extra "Reports" page to demonstrate everything working together.
          </p>
        </div>
        <div className="hero-cta">
          <a className="btn primary" href="/projects">View Projects</a>
          <a className="btn" href="/analytics" style={{ marginLeft: 8 }}>Open Analytics</a>
          <a className="btn" href="/reports" style={{ marginLeft: 8 }}>See Reports</a>
        </div>
      </div>
    </section>
  );
}
