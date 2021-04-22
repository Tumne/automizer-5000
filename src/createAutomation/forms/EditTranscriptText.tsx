import { Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Box, Button, Typography } from '@material-ui/core';
import InputText from '../../common/InputText';
import Wizard from '../../common/wizard/Wizard';
import WizardStep from '../../common/wizard/WizardStep';
import { useWizardContext } from '../../common/wizard/hooks/useWizard';
import Label from '../../common/Label';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface MoveCopyFormProps {
  onBefore?: () => void;
  onComplete: () => void;
}

const MoveCopyForm: React.FC<MoveCopyFormProps> = ({
  onBefore,
  onComplete,
}) => {
  const { setCurrentStep } = useWizardContext();
  const initialValues = {
    find: '',
    replaceWith: '',
    automationName: '',
  };
  return (
    <div>
      <Typography variant="h2">Edit Transcript Text</Typography>
      <Wizard
        initialValues={initialValues}
        onSubmit={async (values) =>
          sleep(1000).then(() => {
            alert('Check console for data');
            console.info('Wizard submit', values);
            onComplete();
          })
        }
        onBefore={onBefore}
      >
        <WizardStep
          validationSchema={Yup.object({
            find: Yup.string().required('required'),
            replaceWith: Yup.string().required('required'),
          })}
        >
          <Typography variant="h4">Perform Action</Typography>
          <InputText name="find" label="Find" placeholder="Enter something" />
          <InputText
            name="replaceWith"
            label="Replace with"
            placeholder="Replace with"
          />
        </WizardStep>
        <WizardStep>
          <Field>
            {({ field: { value } }: any) => (
              <div>
                <Typography variant="h4">Review your automation</Typography>
                <Typography variant="h5">Perform Action</Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  marginTop="5px"
                >
                  <div>
                    <Label title="Find" value={value.find} />
                    <Label title="Replace with" value={value.replaceWith} />
                  </div>
                  <Button
                    variant="contained"
                    type="button"
                    style={{ height: '36px' }}
                    onClick={() => setCurrentStep(0)}
                  >
                    Edit
                  </Button>
                </Box>
              </div>
            )}
          </Field>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            automationName: Yup.string().required('required'),
          })}
        >
          <Typography variant="h4">Automation name</Typography>
          <InputText
            name="automationName"
            placeholder="Enter automation name"
          />
        </WizardStep>
      </Wizard>
    </div>
  );
};

export default MoveCopyForm;
