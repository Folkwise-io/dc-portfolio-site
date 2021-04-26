// Packages
import { hot } from "react-hot-loader"; 
import * as React from "react"; 
import { HashRouter, Route, Switch } from 'react-router-dom'; 

// Styles
import "./style.scss"; 

// Components
import Counter from './components/Counter/counter'; 
import NavBar from './components/NavBar/navbar'; 

const App = () => {
  return(
    <HashRouter>
      <Switch>
        <Route path='/'>
          <NavBar />
          <Counter /> 
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default hot(module)(App);
