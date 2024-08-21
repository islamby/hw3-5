const persistedState = JSON.parse(localStorage.getItem('namesList')) || [];

const namesReducer = (state = persistedState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      const updatedStateAdd = [...state, action.payload];
      localStorage.setItem('namesList', JSON.stringify(updatedStateAdd));
      return updatedStateAdd;
    case 'REMOVE_NAME':
      const updatedStateRemove = state.filter((name, index) => index !== action.payload);
      localStorage.setItem('namesList', JSON.stringify(updatedStateRemove));
      return updatedStateRemove;
    default:
      return state;
  }
};

export default namesReducer;
