import { ErrorMessage, Field, FormikValues } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import Header from '../../common/Header';
import Wizard from '../../common/wizard/Wizard';
import WizardStep from '../../common/wizard/WizardStep';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface EditTranscriptTypeProps {
  onBefore?: () => void;
  onComplete: () => void;
}

const EditTranscriptType: React.FC<EditTranscriptTypeProps> = ({
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
      <Header title="Edit Transcript Type" />
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
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              autoComplete="given-name"
              component="input"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              type="text"
            />
            <ErrorMessage className="error" component="div" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              autoComplete="family-name"
              component="input"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              type="text"
            />
            <ErrorMessage className="error" component="div" name="lastName" />
          </div>
        </WizardStep>
        <WizardStep
          onSubmit={onStepSubmit}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('required'),
          })}
        >
          <div>
            <label htmlFor="email">Email</label>
            <Field
              autoComplete="email"
              component="input"
              id="email"
              name="email"
              placeholder="Email"
              type="text"
            />
            <ErrorMessage className="error" component="div" name="email" />
          </div>
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
          <div>
            <label htmlFor="automationName">Automation Name</label>
            <Field
              component="input"
              id="automationName"
              name="automationName"
              placeholder="Automation Name"
              type="text"
            />
            <ErrorMessage
              className="error"
              component="div"
              name="automationName"
            />
          </div>
        </WizardStep>
      </Wizard>
    </div>
  );
};

export default EditTranscriptType;
