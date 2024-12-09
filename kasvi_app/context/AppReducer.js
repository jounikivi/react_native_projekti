const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return {
        ...state,
        plants: [...state.plants, action.payload],
      };

    case 'REMOVE_PLANT':
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id !== action.payload),
      };

    case 'LOAD_PLANTS': // Uusi tyyppi tallennettujen kasvien lataamiseen
      return {
        ...state,
        plants: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
