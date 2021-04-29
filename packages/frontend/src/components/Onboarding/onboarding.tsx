import React, { useState } from 'react';
import Step1 from './Steps/projects';
import Step2 from './Steps/aboutMe';
import Step3 from './Steps/info';
import Step4 from './Steps/employee';
import Step5 from './Steps/recLayout';

const Onboarding = () => {
  const [currStep, setCurrStep] = useState(1);

  function onClick(e: React.SyntheticEvent) {
    e.preventDefault();
    setCurrStep(currStep + 1);
  }

  return (
    <div className='onboarding flex-container flex-center'>
      <div className="onboarding__progress-bar flex-item__1-6">&nbsp;</div>

      <div className="onboarding__card flex-item__5-6">
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
    </div>
  );
};

export default Onboarding;
