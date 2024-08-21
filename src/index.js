import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainApp from './App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
);
