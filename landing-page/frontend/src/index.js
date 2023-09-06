import React from 'react';
import ReactDOM from 'react-dom/client';
import Home, { shouldForwardProp } from './templates/App';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>,
);
