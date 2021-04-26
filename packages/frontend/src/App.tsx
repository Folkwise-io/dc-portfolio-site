// Packages
import { hot } from 'react-hot-loader';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Styles
import './style.scss';

// Components
import Counter from './components/Counter/counter'; 
import NavBar from './components/NavBar/navbar'; 
import Home from './Components/Home';
import Onboarding from './Components/Onboarding';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/navbar">
          <NavBar />
        </Route>

        <Route path="/Onboarding">
          <Onboarding />
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default hot(module)(App);
