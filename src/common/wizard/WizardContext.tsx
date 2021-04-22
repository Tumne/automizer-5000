import { createContext, ReactChild, ReactChildren, useState } from 'react';

type WizardContent = {
  currentStep: number;
  setCurrentStep: (c: number) => void;
};

export const WizardContext = createContext<WizardContent>({
  currentStep: 0,
  setCurrentStep: () => {},
});

interface ProviderProps {
  children: ReactChild | ReactChildren;
}

export const WizardProvider: React.FC<ProviderProps> = ({ children }) => {
  // const { maxSteps, currentStep } = props;
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <WizardContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </WizardContext.Provider>
  );
};
