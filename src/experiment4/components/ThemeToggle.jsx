import React from 'react';
import { useAppContext } from '../context/AppContext';

export default function ThemeToggle() {
  const { state, dispatch } = useAppContext();

  return (
    <button className="theme-toggle" onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      {state.theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
}
