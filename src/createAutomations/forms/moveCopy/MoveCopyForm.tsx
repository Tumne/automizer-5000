import React, { useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Footer from '../../../common/Footer';
import Header from '../../../common/Header';
import Stepper from '../../../common/Stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const validationSchema = yup.object({
  recordingTitle: yup.string().required('Recording title is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

interface MoveCopyFormProps {
  onBefore?: () => void;
  onComplete: () => void;
}

export const MoveCopyForm: React.FC<MoveCopyFormProps> = ({
  onBefore,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const isPrevDisabled = currentStep === 0 && typeof onBefore === 'undefined';
  const formik = useFormik({
    initialValues: {
      recordingTitle: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik);

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

  return (
    <div>
      <Header title="Move or copy recording" />
      <Stepper currentStep={currentStep} totalSteps={steps.length} />
      {steps[currentStep]}
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h5">Recording title contains</Typography>
        <TextField
          id="recordingTitle"
          name="recordingTitle"
          placeholder="No filter applied"
          variant="outlined"
          fullWidth
          value={formik.values.recordingTitle}
          onChange={formik.handleChange}
          error={
            formik.touched.recordingTitle &&
            Boolean(formik.errors.recordingTitle)
          }
          helperText={
            formik.touched.recordingTitle && formik.errors.recordingTitle
          }
        />
        <Typography variant="h5">Recording type is</Typography>
        <TextField
          fullWidth
          id="recordingType"
          name="recordingType"
          type="recordingType"
          placeholder="Enter your password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Footer
          isPrevDisabled={isPrevDisabled}
          nextButtonText={
            currentStep === steps.length - 1 ? 'Create Automation' : 'Continue'
          }
          prevStep={
            currentStep === 0 ? onBefore : () => setCurrentStep(currentStep - 1)
          }
          nextStep={() =>
            currentStep < steps.length - 1
              ? setCurrentStep(currentStep + 1)
              : onComplete()
          }
        />
      </form>
    </div>
  );
};
