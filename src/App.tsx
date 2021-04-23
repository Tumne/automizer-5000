import './App.css';
import 'typeface-roboto';
import 'typeface-poppins';
import 'typeface-teko';
import Button from '@material-ui/core/Button';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { Toaster } from 'react-hot-toast';

import Modal from './common/modal/Modal';
import useModal from './common/modal/hooks/useModal';
import CreateAutomation from './createAutomation/CreateAutomation';
import { Typography } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1B7AE3',
    },
  },
  typography: {
    fontFamily: 'roboto',
    button: {
      textTransform: 'none',
    },
    h5: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '24px',
      margin: '14px 0 2px',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '28px',
      margin: '15px 0 0',
    },
    h2: {
      fontFamily: 'poppins',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '30px',
    },
    h1: {
      position: 'absolute',
      top: '70px',
      right: '50px',
      fontFamily: 'teko',
      color: '#FFF',
    },
  },
});

function App() {
  const [isOpen, toggleModal] = useModal();

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Typography variant="h1">AUTOMIZER 5000</Typography>
        <Button variant="contained" color="default" onClick={toggleModal}>
          +&nbsp;&nbsp;&nbsp;Create Automation
        </Button>
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <CreateAutomation onComplete={toggleModal} />
        </Modal>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            margin: '40px',
            zIndex: 1,
          },
        }}
      />
    </MuiThemeProvider>
  );
}

export default App;
