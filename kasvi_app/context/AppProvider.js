import React, { useReducer } from 'react';
import { AppContext } from './AppContext';
import AppReducer from './AppReducer';

// Alustava tila
const initialState = {
  plants: [], // Lista kasveista
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Esimerkki toiminnoista
  const addPlant = (plant) => {
    dispatch({ type: 'ADD_PLANT', payload: plant });
  };

  const removePlant = (id) => {
    dispatch({ type: 'REMOVE_PLANT', payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, addPlant, removePlant }}>
      {children}
    </AppContext.Provider>
  );
};
