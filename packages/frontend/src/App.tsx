// Packages
import { hot } from 'react-hot-loader';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Styles
import './style.scss';

// Components
import Home from './Components/home';
import Counter from './Components/Counter/counter';
import SignUp from './Components/SignUp/signup';
import Onboarding from './Components/Onboarding/onboarding';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/Onboarding">
          <Onboarding />
        </Route>

      <Route path="/Signup">
          <SignUp />
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
