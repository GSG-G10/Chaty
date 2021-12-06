import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MainPage } from './pages/mainPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
    },
    secondary: {
      main: '#007fff',
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
    <MainPage />
  </ThemeProvider>
);
