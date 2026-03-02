import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearFavorites } from '../redux/slices/favoritesSlice';
import { useAppContext } from '../context/AppContext';

export default function Analytics() {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  const { theme } = useAppContext();

  const summary = useMemo(() => {
    return {
      totalFavorites: favorites.length,
      favoriteTitles: favorites.map((f) => f.title),
    };
  }, [favorites]);

  return (
    <main className={`container page ${theme}`}>
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
          <button onClick={() => dispatch(clearFavorites())}>Clear Favorites</button>
        </div>
      </div>
    </main>
  );
}
