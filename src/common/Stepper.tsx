import React from 'react';
import { LinearProgress, makeStyles, Theme } from '@material-ui/core';

type Props = {
  totalSteps?: number;
};

const useStyles = makeStyles<Theme, Props>(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    marginTop: '15px',
  },
  steps: {
    fontSize: '12px',
    margin: '0 10px 0 0',
  },
  progressContainer: {
    display: 'grid',
    width: '100%;',
    gridTemplateColumns: ({ totalSteps }) => `repeat(${totalSteps}, 1fr)`,
    gridGap: '5px',
    alignItems: 'center',
  },
  root: {
    height: '2px',
    borderRadius: 5,
  },
  bar: {
    transition: 'none',
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: '#E6EAEE',
  },
}));

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  isComplete: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  currentStep,
  totalSteps,
  isComplete,
}) => {
  const styles = useStyles({ totalSteps });
  const getProgressValue = (index: number) => {
    if (isComplete) {
      return 100;
    }
    return index === currentStep ? 50 : index < currentStep ? 100 : 0;
  };

  return (
    <div className={styles.container}>
      <p className={styles.steps}>
        Step {currentStep + 1} of {totalSteps}
      </p>
      <div className={styles.progressContainer}>
        {[...Array(totalSteps)].map((_, index) => (
          <LinearProgress
            key={index}
            classes={{
              bar: styles.bar,
              colorPrimary: styles.colorPrimary,
              root: styles.root,
            }}
            variant="determinate"
            value={getProgressValue(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
