import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'; 
import axios from 'axios';

import './style.css';

import Home from './components/home'; 

interface Counter {
  counter: number;
}

const App = () => {
  return(
    <HashRouter>
    {/* <div className="title-box">
      <h1 className="title">Ahoy there, Collectivists! Here be Dragons!! Yargh!</h1>
    </div> */}
      <Switch>
        <Route path='/'>
          <Home /> 
        </Route>
      </Switch>
    </HashRouter>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    (async () => {
      await axios.get<Counter>('http://localhost:5000/counter').then(response => {
        setCounter(response.data.counter);
    });
    })()
  },[]);

  function changeCounter(action: string) {
    switch (action) {
      case 'INCREMENT':
        (async () => {
          await axios.post<Counter>('http://localhost:5000/counter', {"change" : "INCREMENT"})
        })()
        setCounter(counter + 1);
        break;
      case 'DECREMENT':
        (async () => {
          await axios.post<Counter>('http://localhost:5000/counter', {"change" : "DECREMENT"})
        })()
        setCounter(counter - 1);
        break;
      default:
        break;
    }
  }

  return (
    <main>
      <section className="section-counter">
        <div className="counter__text-box">
          <div className="u-text-center u-margin-bottom-small">
            <h1 className="heading-primary">Simple Counter App</h1>
          </div>

          <div className="counter__value">{counter}</div>

          <button
            className="counter__button btn--red"
            onClick={() => changeCounter('DECREMENT')}
          >
            Decrement
          </button>

          <button
            className="counter__button btn--green"
            onClick={() => changeCounter('INCREMENT')}
          >
            Increment
          </button>
        </div>
      </section>
    </main>
  );
};

export default hot(module)(App);
