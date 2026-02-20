import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero container">
      <div className="hero-inner">
        <div>
          <h2>Welcome to Experiment 4</h2>
          <p className="lead">Context + useReducer + useMemo — modern React patterns demonstrated.</p>
          <p className="small">This experiment adds a global favorites reducer, analytics memoized summaries, and a colorful, responsive UI.</p>
        </div>
        <div className="hero-cta">
          <a className="btn primary" href="/projects">View Projects</a>
          <a className="btn" href="/analytics" style={{ marginLeft: 8 }}>Open Analytics</a>
        </div>
      </div>
    </section>
  );
}
