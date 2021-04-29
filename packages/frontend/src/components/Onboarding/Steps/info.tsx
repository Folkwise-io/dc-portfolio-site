import React from 'react';

function Info() {

  return (
    <div className="project-card">
      <div className="utility-margin-bottom-medium">Step 3</div>
      <h3 className="utility-margin-bottom-medium">Double check your contact info.</h3>
      <p className="utility-margin-bottom-medium">
        Adding relevant social media accounts is a way for potential employers
        to get a better idea about your personality and what you’re like beyond
        your “About me” section.
      </p>

      <div>Full name</div>
      <input type="text" />

      <div>Phone Number</div>
      <input type="text" />

      <div>Email</div>
      <input type="text" />

      <div>Social Links</div>
      <div>Link One</div>
      <div>Link Two</div>
    </div>
  );
}

export default Info;
