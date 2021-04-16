import { hot } from 'react-hot-loader';
import * as React from 'react';
import './style.css';

interface Counter {
  counter: number;
}

const App = () => {
  return (
    <div>Hello World</div>
  );
};

export default hot(module)(App);
