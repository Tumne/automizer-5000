import React, { useState } from 'react';
import Footer from '../../../common/Footer';
import Header from '../../../common/Header';
import Stepper from '../../../common/Stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

interface MoveCopyFormProps {
  onBefore?: () => void;
  onComplete: () => void;
}

export const MoveCopyForm: React.FC<MoveCopyFormProps> = ({
  onBefore,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];
  const isPrevDisabled = currentStep === 0 && typeof onBefore === 'undefined';

  return (
    <div>
      <Header title="Move or copy recording" />
      <Stepper currentStep={currentStep} totalSteps={steps.length} />
      {steps[currentStep]}
      <Footer
        isPrevDisabled={isPrevDisabled}
        nextButtonText={
          currentStep === steps.length - 1 ? 'Create Automation' : 'Continue'
        }
        prevStep={
          currentStep === 0 ? onBefore : () => setCurrentStep(currentStep - 1)
        }
        nextStep={() =>
          currentStep < steps.length - 1
            ? setCurrentStep(currentStep + 1)
            : onComplete()
        }
      />
    </div>
  );
};
