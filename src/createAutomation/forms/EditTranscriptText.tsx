import { FormikValues } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import Header from '../../common/Header';
import InputText from '../../common/InputText';
import Wizard from '../../common/Wizard';
import WizardStep from '../../common/WizardStep';
import Review from './common/Review';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface EditTranscriptTextFormProps {
  onBefore?: () => void;
  onComplete: () => void;
}

const EditTranscriptTextForm: React.FC<EditTranscriptTextFormProps> = ({
  onBefore,
  onComplete,
}) => {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    automationName: '',
  };
  const [formData, setFormData] = useState<FormikValues>(initialValues);
  const onStepSubmit = (values: FormikValues) => setFormData(values);

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
          onSubmit={onStepSubmit}
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
          onSubmit={onStepSubmit}
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
          {/* <Review /> */}
        </WizardStep>
        <WizardStep onSubmit={onStepSubmit}>
          <div>
            <p>{formData.firstName}</p>
            <p>{formData.lastName}</p>
            <p>{formData.email}</p>
          </div>
        </WizardStep>
        <WizardStep
          onSubmit={onStepSubmit}
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
