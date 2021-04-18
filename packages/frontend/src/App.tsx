import { hot } from "react-hot-loader"; 
import * as React from "react"; 
import "./style.scss"; 
import { HashRouter, Route, Switch } from 'react-router-dom'; 

import Counter from './components/Counter/counter'; 


interface Counter {
  counter: number;
}

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
