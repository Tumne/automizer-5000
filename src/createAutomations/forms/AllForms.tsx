import React from 'react';
import { Automations } from '../../enums/automations';
import { MoveCopyForm } from './moveCopy/MoveCopyForm';

interface AllFormsProps {
  currentAutomation: string;
  onBefore: () => void;
  onComplete: () => void;
}

const AllForms: React.FC<AllFormsProps> = ({
  currentAutomation,
  onBefore,
  onComplete,
}) => {
  return (
    <div>
      {
        {
          // [Automations.TAG_COMMENT_CLIP]: <div>N/A</div>,
          [Automations.MOVE_COPY]: (
            <MoveCopyForm onBefore={onBefore} onComplete={onComplete} />
          ),
          [Automations.EDIT_TRANSCRIPT_TEXT]: <div>Edit Transcript Text</div>,
          [Automations.EDIT_TRANSCRIPT_TYPE]: <div>Edit Transcript Type</div>,
          // [Automations.CREATE_LABEL]: <div>N/A</div>,
        }[currentAutomation]
      }
    </div>
  );
};

export default AllForms;
