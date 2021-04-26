import React from 'react';
import axios from 'axios';

export const Home = () => {

  const authGithub = () => {
    console.log('Authenticating with GitHub...')
    axios.get(`/auth/github`)
  };

  return (
    <div>
      <div>This is the home page!</div>
      <button onClick={authGithub}>Would you like to sign up?</button>
    </div>
  );
};

export default Home;
