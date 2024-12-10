import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { storeData, getData } from '../services/storageService';

export const AppContext = createContext();

// Alustava tila
const initialState = {
  plants: [], // Lista lisätyistä kasveista
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Lataa tallennetut kasvit sovelluksen käynnistyessä
  useEffect(() => {
    const loadPlants = async () => {
      const storedPlants = await getData('plants');
      if (storedPlants) {
        dispatch({ type: 'LOAD_PLANTS', payload: storedPlants });
      }
    };
    loadPlants();
  }, []);

  // Lisää kasvi ja tallenna se
  const addPlant = async (plant) => {
    const updatedPlants = [...state.plants, plant];
    dispatch({ type: 'ADD_PLANT', payload: plant });
    await storeData('plants', updatedPlants); // Päivitä tallennus
  };

  // Poista kasvi ja päivitä tallennus
  const removePlant = async (id) => {
    const updatedPlants = state.plants.filter((plant) => plant.id !== id);
    dispatch({ type: 'REMOVE_PLANT', payload: id });
    await storeData('plants', updatedPlants);
  };

  return (
    <AppContext.Provider value={{ ...state, addPlant, removePlant }}>
      {children}
    </AppContext.Provider>
  );
};
