import { useState } from 'react';

const useWizard = () => {
  const [currentStep, setCurrentStep] = useState(0); // TODO: useContext()

  return { currentStep, setCurrentStep };
};

export default useWizard;
