import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <div className="exp3-hero">
        <h2>Hi — I'm a sample portfolio</h2>
        <p>This is the Home page for Experiment 3. Use React Router to move between pages.</p>
        <p>
          <Link to="/projects">See Projects →</Link>
        </p>
      </div>

      <p>Keep the design consistent with your other experiment pages and extend the content.</p>
    </section>
  );
};

export default Home;
