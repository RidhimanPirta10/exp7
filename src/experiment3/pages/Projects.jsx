import React from 'react';

const projects = [
  { id: 1, title: 'Project A', desc: 'A short description of Project A.' },
  { id: 2, title: 'Project B', desc: 'A short description of Project B.' },
  { id: 3, title: 'Project C', desc: 'A short description of Project C.' },
];

const Projects = () => {
  return (
    <section>
      <h3>Projects</h3>
      <div className="exp3-projects">
        {projects.map((p) => (
          <article className="exp3-card" key={p.id}>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
      <footer className="exp3-footer">Built for Experiment 3 — React Router demo</footer>
    </section>
  );
};

export default Projects;
