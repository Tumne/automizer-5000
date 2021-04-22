import React, { ReactElement, useState } from 'react';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import { WizardStepProps } from './WizardStep';
import Stepper from '../Stepper';
import Footer from '../Footer';
import { useWizardContext } from './WizardContext';

interface WizardProps extends FormikConfig<FormikValues> {
  onBefore?: () => void;
}

const Wizard: React.FC<WizardProps> = ({
  children,
  initialValues,
  onSubmit,
  onBefore = () => {},
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const [isComplete, setIsComplete] = useState(false);
  const { copy } = useWizardContext();

  const steps = React.Children.toArray(
    children
  ) as ReactElement<WizardStepProps>[];
  const isPrevDisabled = currentStep === 0 && typeof onBefore === 'undefined';
  const step = steps[currentStep];
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;

  const next = (values: FormikValues) => {
    setSnapshot(values);
    setCurrentStep(Math.min(currentStep + 1, totalSteps - 1));
  };

  const previous = (values: FormikValues) => {
    setSnapshot(values);
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  const handleSubmit = async (values: FormikValues, bag: any) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      setIsComplete(true);
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <Stepper
            currentStep={currentStep}
            totalSteps={totalSteps}
            isComplete={isComplete}
          />
          <div>{copy}</div>
          {step}
          <Footer
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={formik.isSubmitting}
            nextButtonText={isLastStep ? 'Create Automation' : 'Continue'}
            prevStep={
              currentStep === 0 ? onBefore : () => previous(formik.values)
            }
          />
        </Form>
      )}
    </Formik>
  );
};
export default Wizard;
