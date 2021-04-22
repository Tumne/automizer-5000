import { makeStyles, Typography } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';

import Icon from './Icon';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
}));

interface HeaderProps {
  SVG?: SvgIconComponent;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ SVG, title }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {SVG && <Icon SVG={SVG} />}
      <Typography variant="h2">{title}</Typography>
    </div>
  );
};

export default Header;
