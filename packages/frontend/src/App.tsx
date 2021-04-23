// Packages
import { hot } from 'react-hot-loader';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Styles
import './style.scss';

// Components
import Home from './Components/Home';
import Counter from './Components/Counter/Counter';
import Onboarding from './Components/Onboarding';

const App = () => {
  return (
    <HashRouter>
      <Switch>
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
