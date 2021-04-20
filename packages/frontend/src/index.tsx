import * as React from "react"
import * as ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

import { increment, decrement } from './actions';  

const store = createStore(rootReducer);  

window.store = store; 
window.increment = increment; 
window.decrement = decrement; 

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>, 
 document.getElementById("app")
)
