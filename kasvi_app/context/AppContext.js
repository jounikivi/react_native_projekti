import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { storeData, getData } from '../services/storageService';

export const AppContext = createContext();

// Sovelluksen alustava tila, jossa on tyhjä lista kasveista
const initialState = {
  plants: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Ladataan tallennetut kasvit AsyncStoragesta sovelluksen käynnistyessä
  useEffect(() => {
    const loadPlants = async () => {
      const storedPlants = await getData('plants'); // Hakee tallennetut kasvit
      if (storedPlants) {
        dispatch({ type: 'LOAD_PLANTS', payload: storedPlants }); // Päivittää tilan
      }
    };
    loadPlants();
  }, []);

  // Lisää kasvi ja tallentaa sen AsyncStorageen
  const addPlant = async (plant) => {
    const updatedPlants = [...state.plants, plant];
    dispatch({ type: 'ADD_PLANT', payload: plant });
    await storeData('plants', updatedPlants); // Päivittää tallennuksen
  };

  // Poistaa kasvin ja päivittää AsyncStoragen
  const removePlant = async (id) => {
    const updatedPlants = state.plants.filter((plant) => plant.id !== id);
    dispatch({ type: 'REMOVE_PLANT', payload: id });
    await storeData('plants', updatedPlants); // Päivittää tallennuksen
  };

  return (
    <AppContext.Provider value={{ ...state, addPlant, removePlant }}>
      {children}
    </AppContext.Provider>
  );
};
