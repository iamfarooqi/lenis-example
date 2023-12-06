import React from 'react';
import ReactDOM from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/styles';
import App from './App';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
