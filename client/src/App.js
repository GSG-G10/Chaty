import { createTheme, ThemeProvider } from '@mui/material/styles';

import { InboxContainer } from './containers/inboxContainer';

const theme = createTheme({
  palette: {
    primary: {
      50: '#F0F7FF',
      100: '#C2E0FF',
      200: '#80BFFF',
      300: '#66B2FF',
      400: '#3399FF',
      500: '#007FFF',
      600: '#0072E5',
      700: '#0059B2',
      800: '#004C99',
      900: '#003A75',
    },
    secondary: {
      main: '#ededed',
      A400: '#7e7f85',
    },
    white: {
      main: '#FFFFFF',
      contrastText: '#242424',
    },
    unread: {
      main: '#db3276',
      contrastText: '#fff',
    },
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'capitalize',
    },
  },
});
export const App = () => (
  <ThemeProvider theme={theme}>
    <InboxContainer />
  </ThemeProvider>
);
