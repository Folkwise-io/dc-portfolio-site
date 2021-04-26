import React, { useState } from 'react';
import Step1 from './projects';
import Step2 from './aboutMe';
import Step3 from './info';
import Step4 from './employee';
import Step5 from './recLayout';

const Onboarding = () => {
  const [currStep, setCurrStep] = useState(1);

  function onClick(e: React.SyntheticEvent) {
    e.preventDefault();
    setCurrStep(currStep + 1);
  }

  return (
    <div>
      {currStep === 1 && <Step1 />}
      {currStep === 2 && <Step2 />}
      {currStep === 3 && <Step3 />}
      {currStep === 4 && <Step4 />}
      {currStep === 5 && <Step5 />}

      {currStep < 5 ? (
        <button onClick={onClick}>Next button</button>
      ) : (
        <button>Submit</button>
      )}
    </div>
  );
};

export default Onboarding;
