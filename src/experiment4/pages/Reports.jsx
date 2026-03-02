import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppContext } from '../context/AppContext';

export default function Reports() {
  const favorites = useSelector((state) => state.favorites.items);
  const { user } = useAppContext();

  // derive a list of titles uppercased only when favorites change
  const reportData = useMemo(() => {
    return favorites.map((f) => f.title.toUpperCase());
  }, [favorites]);

  return (
    <main className="container page">
      <h2>Reports</h2>
      <p>Welcome, <strong>{user.name}</strong>. Here is your favorites report.</p>
      {reportData.length ? (
        <ul>
          {reportData.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      ) : (
        <p>No favorite items to report.</p>
      )}
    </main>
  );
}