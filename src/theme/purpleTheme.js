import { createTheme } from '@mui/material';
import { blue, orange, red } from '@mui/material/colors';

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#262254'
    },
    secondary: {
      main: '#543884'
    },
    info: {
      main: blue.A100
    },
    error: {
      main: red.A400
    },
    warning: {
      main: orange.A100
    },
  }
});
