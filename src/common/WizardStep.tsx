import { FormikConfig, FormikValues } from 'formik';
import React from 'react';

const WizardStep: React.FC<FormikConfig<FormikValues>> = ({ children }) => {
  return <>{children}</>;
};

export default WizardStep;
