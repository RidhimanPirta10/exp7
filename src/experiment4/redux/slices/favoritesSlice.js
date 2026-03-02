import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFavorite(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearFavorites(state) {
      state.items = [];
    }
  }
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;