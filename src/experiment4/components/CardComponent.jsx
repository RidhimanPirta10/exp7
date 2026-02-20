import React from 'react';
import { useAppContext } from '../context/AppContext';

export default function CardComponent({ item }) {
  const { state, dispatch } = useAppContext();
  const isFav = state.favorites.find((f) => f.id === item.id);

  const toggleFav = () => {
    if (isFav) dispatch({ type: 'REMOVE_FAVORITE', payload: item });
    else dispatch({ type: 'ADD_FAVORITE', payload: item });
  };

  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="card-actions">
        <button onClick={toggleFav}>{isFav ? 'Remove Favorite' : 'Add Favorite'}</button>
      </div>
    </div>
  );
}
