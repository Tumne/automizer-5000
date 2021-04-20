import { useState } from 'react';
import AllForms from './forms/AllForms';
import SelectAutomations from './SelectAutomations';

interface CreateAutomationProps {
  onComplete: () => void;
}

const CreateAutomation: React.FC<CreateAutomationProps> = ({ onComplete }) => {
  const [currentAutomation, setCurrentAutomation] = useState('');
  const [showAutomation, setShowAutomation] = useState(false);

  return (
    <div>
      {showAutomation ? (
        <AllForms
          currentAutomation={currentAutomation}
          onBefore={() => setShowAutomation(false)}
          onComplete={onComplete}
        />
      ) : (
        <SelectAutomations
          value={currentAutomation}
          onChange={(value) => setCurrentAutomation(value)}
          onComplete={() => setShowAutomation(true)}
        />
      )}
    </div>
  );
};

export default CreateAutomation;
