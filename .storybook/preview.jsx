import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MemoryRouter } from 'react-router-dom';

import { defaultTheme } from '../src/styles/themes';

// Google Fonts 로드 (Material Symbols + 기본 폰트)
const googleFonts = [
  // Material Symbols
  'Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  'Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
  // Default Theme Font
  'Outfit:wght@300;400;500;600;700;800;900',
];

googleFonts.forEach((font) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
  document.head.appendChild(link);
});

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    darkMode: {
      description: 'Dark mode toggle',
      toolbar: {
        title: 'Dark Mode',
        items: [
          { value: false, icon: 'sun', title: 'Light' },
          { value: true, icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    darkMode: false,
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'Overview',
          'Style',
          ['Overview', 'Colors', 'Typography', 'Icons'],
          'MUI Component',
          'Custom Component',
          'Template',
          'Test Data',
        ],
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDarkMode = context.globals.darkMode === true;
      return (
        <MemoryRouter>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <div style={{ width: '100%', paddingTop: '40px' }}>
              <Story args={{ ...context.args, isDarkMode }} />
            </div>
          </ThemeProvider>
        </MemoryRouter>
      );
    },
  ],
};

export default preview;
