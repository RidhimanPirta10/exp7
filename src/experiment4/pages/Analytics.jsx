import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Analytics() {
  const { state, dispatch } = useAppContext();

  const summary = useMemo(() => {
    return {
      totalFavorites: state.favorites.length,
      favoriteTitles: state.favorites.map((f) => f.title),
    };
  }, [state.favorites]);

  return (
    <main className="container page">
      <h2>Analytics</h2>
      <div className="analytics">
        <div className="metric">Favorites: <strong>{summary.totalFavorites}</strong></div>
        <div className="metric">Favorite items:</div>
        <ul>
          {summary.favoriteTitles.length ? (
            summary.favoriteTitles.map((t, i) => <li key={i}>{t}</li>)
          ) : (
            <li>No favorites yet</li>
          )}
        </ul>
        <div className="analytics-actions">
          <button onClick={() => dispatch({ type: 'CLEAR_FAVORITES' })}>Clear Favorites</button>
        </div>
      </div>
    </main>
  );
}
