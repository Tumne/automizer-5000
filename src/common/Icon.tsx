import { makeStyles } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(() => ({
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    marginRight: '15px',
    borderRadius: '4px',
    background: '#F0FAFE',
  },
  svg: {
    height: '20px',
    color: '#1B7AE3',
  },
}));

interface IconProps {
  SVG: SvgIconComponent;
}

const Icon: React.FC<IconProps> = ({ SVG }) => {
  const styles = useStyles();

  return (
    <div className={styles.icon}>
      <SVG className={styles.svg} />
    </div>
  );
};

export default Icon;
