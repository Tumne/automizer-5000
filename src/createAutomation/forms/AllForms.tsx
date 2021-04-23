import React from 'react';

import MoveCopyForm from './MoveCopy';
import EditTranscriptTextForm from './EditTranscriptText';
import EditTranscriptTypeForm from './EditTranscriptType';
import { WizardProvider } from '../../common/wizard/WizardContext';
import { Automations } from '../../enums/automations';

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
    <WizardProvider>
      <div>
        {
          {
            // [Automations.TAG_COMMENT_CLIP]: null,
            [Automations.MOVE_COPY]: (
              <MoveCopyForm onBefore={onBefore} onComplete={onComplete} />
            ),
            [Automations.EDIT_TRANSCRIPT_TEXT]: (
              <EditTranscriptTextForm
                onBefore={onBefore}
                onComplete={onComplete}
              />
            ),
            [Automations.EDIT_TRANSCRIPT_TYPE]: (
              <EditTranscriptTypeForm
                onBefore={onBefore}
                onComplete={onComplete}
              />
            ),
            // [Automations.CREATE_LABEL]: null,
          }[currentAutomation]
        }
      </div>
    </WizardProvider>
  );
};

export default AllForms;
