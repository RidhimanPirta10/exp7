export const initialState = {
  theme: 'light',
  favorites: [],
  user: { name: 'Demo User', email: 'demo@example.com' },
};

export default function appReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_FAVORITE':
      if (state.favorites.find((f) => f.id === action.payload.id)) return state;
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter((f) => f.id !== action.payload.id) };
    case 'CLEAR_FAVORITES':
      return { ...state, favorites: [] };
    default:
      return state;
  }
}
