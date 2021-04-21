import React from 'react';
import { Automations } from '../../enums/automations';
import MoveCopyForm from './MoveCopy';
import EditTranscriptTextForm from './EditTranscriptText';
import EditTranscriptTypeForm from './EditTranscriptType';

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
          // [Automations.CREATE_LABEL]: <div>N/A</div>,
        }[currentAutomation]
      }
    </div>
  );
};

export default AllForms;
