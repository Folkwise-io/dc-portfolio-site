import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Portfolios for devs made easy!</h1>
      <p>
        Are you a developer that struggles with designing your portfolio?
        Simulation is made to showcase your code without all the hassles of
        designing a portfolio.
      </p>

      <Link to="/Signup">
        Sign Up
      </Link>
    </div>
  );
};

export default Home;
