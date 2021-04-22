import {
  createContext,
  ReactChild,
  ReactChildren,
  useContext,
  useState,
} from 'react';

type WizardContent = {
  copy: string;
  setCopy: (c: string) => void;
};

const WizardContext = createContext<WizardContent>({
  copy: '',
  setCopy: () => {},
});

interface ProviderProps {
  children: ReactChild | ReactChildren;
}

export const WizardProvider: React.FC<ProviderProps> = ({ children }) => {
  // const { maxSteps, currentStep } = props;

  const [copy, setCopy] = useState<string>('Cheers');

  return (
    <WizardContext.Provider value={{ copy, setCopy }}>
      {children}
    </WizardContext.Provider>
  );
};
export const useWizardContext = () => useContext(WizardContext);
