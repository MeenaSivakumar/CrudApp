import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../utils/theme';
import '../styles/globals.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
