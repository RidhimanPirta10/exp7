import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';
import { useAppContext } from '../context/AppContext';

export default function CardComponent({ item }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFav = favorites.find((f) => f.id === item.id);
  const { theme } = useAppContext();

  const toggleFav = () => {
    if (isFav) dispatch(removeFavorite(item.id));
    else dispatch(addFavorite(item));
  };

  return (
    <div className="card" data-theme={theme}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="card-actions">
        <button onClick={toggleFav}>{isFav ? 'Remove Favorite' : 'Add Favorite'}</button>
      </div>
    </div>
  );
}
