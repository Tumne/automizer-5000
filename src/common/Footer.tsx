import { Button, makeStyles } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: `calc(100% - ${theme.spacing(6)}px)`,
    padding: theme.spacing(1.25, 3, 3),
    borderTop: '1px solid #E6EAEE',
    background: 'white',
  },
  arrowBack: {
    margin: theme.spacing(0, 1, 0, 0),
  },
}));

interface FooterProps {
  nextButtonText?: string;
  prevStep?: () => void | undefined;
  nextStep?: () => void | undefined;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  nextButtonText = '',
  prevStep,
  nextStep,
  isPrevDisabled = false,
  isNextDisabled = false,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.footer}>
      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={prevStep}
        disabled={isPrevDisabled}
      >
        <ArrowBack className={styles.arrowBack} fontSize="small" />
        Back
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={nextStep}
        disabled={isNextDisabled}
      >
        {nextButtonText || 'Continue'}
      </Button>
    </div>
  );
};

export default Footer;
