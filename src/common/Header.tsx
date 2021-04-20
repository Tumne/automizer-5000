import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  h2: {
    fontFamily: 'poppins',
    fontSize: '20px',
    lineHeight: '30px',
    margin: theme.spacing(0),
  },
}));

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const styles = useStyles();

  return (
    <div className={styles.header}>
      <h2 className={styles.h2}>{title}</h2>
    </div>
  );
};

export default Header;
