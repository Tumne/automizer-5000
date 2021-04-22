import './App.css';
import 'typeface-roboto';
import 'typeface-poppins';
import Button from '@material-ui/core/Button';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import Modal from './common/modal/Modal';
import useModal from './common/modal/hooks/useModal';
import CreateAutomation from './createAutomation/CreateAutomation';

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
      margin: 0,
    },
    h2: {
      fontFamily: 'poppins',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '30px',
      margin: 0,
    },
  },
});

function App() {
  const [isOpen, toggleModal] = useModal();

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Button variant="contained" color="primary" onClick={toggleModal}>
          +&nbsp;&nbsp;&nbsp;Create Automation
        </Button>
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <CreateAutomation onComplete={toggleModal} />
        </Modal>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
