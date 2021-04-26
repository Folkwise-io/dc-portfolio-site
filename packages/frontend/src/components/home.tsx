import React from 'react';
// import {useHistory} from 'react-router-dom'

export const Home = () => {
  function handleClick () {
    console.log('this event is happening')
  }

  return (
    <div>
      <h1>Portfolios for devs made easy!</h1>
      <p>Are you a developer that struggles with designing your portfolio? Simulation is made to showcase your code without all the hassles of designing a portfolio.</p>
      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default Home;
