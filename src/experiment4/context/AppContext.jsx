import React, { createContext, useReducer, useContext } from 'react';
import appReducer, { initialState } from '../reducer/appReducer';

const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
