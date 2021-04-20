import './App.css';
import 'typeface-roboto';
import 'typeface-poppins';
import Button from '@material-ui/core/Button';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import Dialog from './common/Dialog';
import useModal from './hooks/useModal';
import CreateAutomations from './createAutomations/CreateAutomation';

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
        <Dialog isOpen={isOpen} onClose={toggleModal}>
          <CreateAutomations onComplete={toggleModal} />
        </Dialog>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
