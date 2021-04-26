import React from 'react';
import { Link } from 'react-router-dom';

export const signup = () => {
  return (
    <div>
      <h3>Welcome, Create your account</h3>
      <h4>Connect your Github to get started</h4>

      <Link to="/onboarding">Connect to Github</Link>
      <button>Already have an account? Login</button>
    </div>
  );
};

export default signup;
