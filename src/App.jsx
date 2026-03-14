import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { softLightTheme as theme } from './styles/themes';
import { SaasDashboardPage } from './pages/SaasDashboardPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <SaasDashboardPage />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
