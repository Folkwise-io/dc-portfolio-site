
import { hot } from "react-hot-loader"; 
import * as React from "react"; 
import "./style.css"; 
import { HashRouter, Route, Switch } from 'react-router-dom'; 

import Home from './components/home'; 
import Counter from './components/counter'; 


const App = () => {
  return(
    <HashRouter>
      <Switch>
        <Route path='/'>
          <Counter /> 
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default hot(module)(App);
