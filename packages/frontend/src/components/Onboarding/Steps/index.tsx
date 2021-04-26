import React from 'react';
import Step1 from './projects';
import Step2 from './aboutMe';
import Step3 from './info';
import Step4 from './employee';
import Step5 from './recLayout';

const Onboarding = () => {
  return (
    <div>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />

      <button>Next button</button>
    </div>
  );
};

export default Onboarding;
