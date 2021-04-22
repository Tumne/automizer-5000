import { makeStyles, Typography } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
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

interface HeaderProps {
  SVG?: SvgIconComponent;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ SVG, title }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{SVG && <SVG className={styles.svg} />}</div>
      <Typography variant="h2">{title}</Typography>
    </div>
  );
};

export default Header;
