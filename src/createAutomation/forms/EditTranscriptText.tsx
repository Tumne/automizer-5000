import { Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Header from '../../common/Header';
import InputText from '../../common/InputText';
import Wizard from '../../common/wizard/Wizard';
import WizardStep from '../../common/wizard/WizardStep';
import { useWizardContext } from '../../common/wizard/hooks/useWizard';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface EditTranscriptTextFormProps {
  onBefore?: () => void;
  onComplete: () => void;
}

const EditTranscriptTextForm: React.FC<EditTranscriptTextFormProps> = ({
  onBefore,
  onComplete,
}) => {
  const { setCurrentStep } = useWizardContext();

  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    automationName: '',
  };

  return (
    <div>
      <Header title="Edit Transcript Text" />
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
            firstName: Yup.string().required('required'),
            lastName: Yup.string().required('required'),
          })}
        >
          <InputText
            name="firstName"
            label="First name"
            placeholder="Enter first name"
          />
          <InputText
            name="lastName"
            label="Last name"
            placeholder="Enter last name"
          />
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('required'),
          })}
        >
          <InputText
            name="email"
            label="Email"
            placeholder="Enter email"
            type="email"
          />
        </WizardStep>
        <WizardStep>
          <Field>
            {({ field }: any) => (
              <div>
                <p>{field.value.firstName}</p>
                <p>{field.value.lastName}</p>
                <p>{field.value.email}</p>
              </div>
            )}
          </Field>
          <button type="button" onClick={() => setCurrentStep(0)}>
            test
          </button>
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
