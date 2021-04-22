import { FormikConfig, FormikValues } from 'formik';
import React from 'react';

export interface WizardStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  onSubmit?: (values: FormikValues, bag: any) => void;
}

const WizardStep: React.FC<WizardStepProps> = ({ children }) => {
  return <>{children}</>;
};

export default WizardStep;
