import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import NavBar from './components/NavBar/navbar';

import { increment, decrement } from './actions';

const store = createStore(rootReducer);
declare global {
  interface Window {
    store: any;
    increment: any;
    decrement: any;
  }
}

window.store = store;
window.increment = increment;
window.decrement = decrement;

ReactDOM.render(
  <Provider store={store}>
    <NavBar />
    <App />
  </Provider>,
  document.getElementById('app')
);
