import { hot } from 'react-hot-loader';
import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect( () =>{
    const data = (async () => {
      return await axios.get('http://localhost:5000/counter')
  })();
    console.log(data)
  })

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
