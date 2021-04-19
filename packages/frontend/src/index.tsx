import * as React from "react"
import * as ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);  

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"))