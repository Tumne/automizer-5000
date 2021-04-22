import { useState } from 'react';
import AllForms from './forms/AllForms';
import SelectAutomation from './SelectAutomation';

interface CreateAutomationProps {
  onComplete: () => void;
}

const CreateAutomation: React.FC<CreateAutomationProps> = ({ onComplete }) => {
  const [currentAutomation, setCurrentAutomation] = useState('');
  const [showAllForms, setShowAllForms] = useState(false);

  return (
    <div>
      {showAllForms ? (
        <AllForms
          currentAutomation={currentAutomation}
          onBefore={() => setShowAllForms(false)}
          onComplete={onComplete}
        />
      ) : (
        <SelectAutomation
          value={currentAutomation}
          onChange={(value) => setCurrentAutomation(value)}
          onComplete={() => setShowAllForms(true)}
        />
      )}
    </div>
  );
};

export default CreateAutomation;
