import { Box, makeStyles, Radio, Typography } from '@material-ui/core';
import React from 'react';
import Icon from './Icon';
import { SvgIconComponent } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  control: {
    width: '100%',
  },
  label: {
    margin: theme.spacing(0, 0, 1.5),
  },
  h4: {
    margin: 0,
    lineHeight: '20px',
    color: '#373D43',
    textAlign: 'left',
  },
  h5: {
    margin: 0,
    lineHeight: '20px',
    fontWeight: 'normal',
    color: '#8A939E',
    textAlign: 'left',
  },
  radio: {
    padding: '8px',
  },
}));

interface ToggleContentProps {
  value: string;
  automationtype: string;
  title: string;
  description: string;
  SVG: SvgIconComponent;
}

const ToggleContent: React.FC<ToggleContentProps> = ({
  value,
  automationtype,
  title,
  description,
  SVG,
}) => {
  const styles = useStyles();
  return (
    <>
      <Box display="flex" alignItems="center">
        <Icon SVG={SVG} />
        <Box>
          <Typography className={styles.h4} variant="h4">
            {title}
          </Typography>
          <Typography className={styles.h5} variant="h5">
            {description}
          </Typography>
        </Box>
      </Box>
      <Radio
        className={styles.radio}
        color="primary"
        checked={value === automationtype}
      />
    </>
  );
};

export default ToggleContent;
