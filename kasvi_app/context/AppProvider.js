const AppReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PLANTS':
      return {
        ...state,
        plants: action.payload,
      };
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
    default:
      return state;
  }
};

export default AppReducer;
