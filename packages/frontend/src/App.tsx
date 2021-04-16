import { hot } from 'react-hot-loader';
import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  function changeCounter(action: string) {
    switch (action) {
      case 'INCREMENT':
        setCounter(counter + 1);
        break;
      case 'DECREMENT':
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
