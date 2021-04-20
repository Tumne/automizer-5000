import React, { ReactChild, ReactChildren } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Fade, IconButton, Modal } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'roboto',
  },
  paper: {
    position: 'relative',
    width: '469px',
    height: 'calc(100vh - 48px - 100px)',
    minHeight: '300px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    borderRadius: '6px',
    outline: 'none',
  },
  iconButton: {
    padding: theme.spacing(0.25),
  },
}));

interface DialogProps {
  children: ReactChild | ReactChildren;
  isOpen: boolean;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ children, isOpen, onClose }) => {
  const styles = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.modal}
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={styles.paper}>
          <IconButton
            aria-label="delete"
            className={styles.iconButton}
            onClick={onClose}
          >
            <Clear />
          </IconButton>
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default Dialog;
