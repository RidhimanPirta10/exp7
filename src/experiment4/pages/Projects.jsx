import React, { useMemo, useState } from 'react';
import CardComponent from '../components/CardComponent';

const SAMPLE_PROJECTS = [
  { id: 1, title: 'Project Alpha', description: 'A sample project about alpha.' },
  { id: 2, title: 'Project Beta', description: 'A sample project about beta.' },
  { id: 3, title: 'Project Gamma', description: 'A sample project about gamma.' },
  { id: 4, title: 'Project Delta', description: 'A sample project about delta.' },
];

export default function Projects() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE_PROJECTS;
    return SAMPLE_PROJECTS.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="container page">
      <h2>Projects</h2>
      <div className="filter-bar">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects..." />
      </div>
      <div className="cards">
        {filtered.map((p) => (
          <CardComponent key={p.id} item={p} />
        ))}
      </div>
    </main>
  );
}
