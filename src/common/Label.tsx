import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  label: {
    margin: '0 0 10px ',
    fontSize: '14px',
  },
}));

interface LabelProps {
  title: string;
  value: string;
}

const Label: React.FC<LabelProps> = ({ value, title }) => {
  const styles = useStyles();
  return value ? (
    <p className={styles.label}>
      {title}: "{value}"
    </p>
  ) : null;
};

export default Label;
