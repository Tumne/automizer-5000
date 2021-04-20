import { LinearProgress, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

type Props = {
  totalSteps?: number;
};

const useStyles = makeStyles<Theme, Props>((theme) => ({
  progressContainer: {
    width: '100%;',
    display: 'grid',
    gridTemplateColumns: ({ totalSteps }) => `repeat(${totalSteps}, 1fr)`,
    gridGap: '5px',
  },
  linearProgress: {
    transition: 'none',
  },
}));

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
  const styles = useStyles({ totalSteps });
  const getProgressValue = (index: number) =>
    index === currentStep ? 50 : index < currentStep ? 100 : 0;

  return (
    <div>
      <p>
        Step {currentStep + 1} of {totalSteps}
      </p>
      <div className={styles.progressContainer}>
        {[...Array(totalSteps)].map((_, index) => (
          <LinearProgress
            key={index}
            classes={{ bar: styles.linearProgress }}
            variant="determinate"
            value={getProgressValue(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
