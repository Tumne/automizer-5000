import { Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button, makeStyles, Typography } from '@material-ui/core';
import InputText from '../../common/InputText';
import Wizard from '../../common/wizard/Wizard';
import WizardStep from '../../common/wizard/WizardStep';
import { useWizardContext } from '../../common/wizard/hooks/useWizard';
import Label from '../../common/Label';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const useStyles = makeStyles(() => ({
  stepContainer: {
    overflow: 'scroll',
  },
}));

interface EditTranscriptTextFormProps {
  onBefore?: () => void;
  onComplete: () => void;
}

const EditTranscriptTextForm: React.FC<EditTranscriptTextFormProps> = ({
  onBefore,
  onComplete,
}) => {
  const { setCurrentStep } = useWizardContext();
  const styles = useStyles();
  const initialValues = {
    recordingTitle: '',
    recordingType: '',
    recordingParticipants: '',
    subjectsContain: '',
    recordingTags: '',
    changeType: '',
    addSubjects: '',
    automationName: '',
  };
  return (
    <div>
      <Typography variant="h2">Edit Transcript Text</Typography>
      <Wizard
        initialValues={initialValues}
        onSubmit={async (values) =>
          sleep(1000).then(() => {
            console.info('Wizard submit', values);
            onComplete();
          })
        }
        onBefore={onBefore}
      >
        <WizardStep
          validationSchema={Yup.object({
            recordingTitle: Yup.string().required('required'),
          })}
        >
          <Typography variant="h4">When this happens...</Typography>
          <div className={styles.stepContainer}>
            <InputText
              name="recordingTitle"
              label="Recording title contains"
              placeholder="No filter applied"
            />
            <InputText
              name="recordingType"
              label="Recording type is"
              placeholder="No filter applied"
            />
            <InputText
              name="recordingParticipants"
              label="Recording participants include"
              placeholder="No filter applied"
            />
            <InputText
              name="subjectsContain"
              label="Subjects Contain"
              placeholder="No filter applied"
            />
            <InputText
              name="recordingTags"
              label="Tags in recording Contain"
              placeholder="No filter applied"
            />
          </div>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            changeType: Yup.string().required('required'),
            addSubjects: Yup.string().required('required'),
          })}
        >
          <Typography variant="h4">Perform Action</Typography>
          <InputText
            name="changeType"
            label="Change recording type to"
            placeholder="Choose a type"
          />
          <InputText
            name="addSubjects"
            label="Add recording subjects"
            placeholder="Add subjects"
          />
        </WizardStep>
        <WizardStep>
          <Field>
            {({ field: { value } }: any) => (
              <div>
                <div>
                  <Label
                    title="Recording title contains"
                    value={value.recordingType}
                  />
                  <Label title="Recording type" value={value.recordingTitle} />
                  <Label
                    title="Recording participants"
                    value={value.recordingParticipants}
                  />
                  <Label
                    title="Subjects contain"
                    value={value.subjectsContain}
                  />
                  <Label title="Recording Tags" value={value.recordingTags} />
                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => setCurrentStep(0)}
                  >
                    Edit
                  </Button>
                </div>
                <div>
                  <Label
                    title="Change recording type to:"
                    value={value.changeType}
                  />
                  <Label
                    title="Add recording subjects:"
                    value={value.addSubjects}
                  />
                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => setCurrentStep(1)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            )}
          </Field>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            automationName: Yup.string().required('required'),
          })}
        >
          <InputText
            name="automationName"
            label="Automation name"
            placeholder="Enter automation name"
          />
        </WizardStep>
      </Wizard>
    </div>
  );
};

export default EditTranscriptTextForm;
