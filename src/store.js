import { createStore } from 'redux';
import namesReducer from './Reducer';

const configureStore = () => {
  const store = createStore(namesReducer);
  return store;
};

export default configureStore;
