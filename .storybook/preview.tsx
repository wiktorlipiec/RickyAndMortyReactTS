import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from '../src/styles/theme';
import React from 'react';

const preview: Preview = {
  decorators:[
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </BrowserRouter>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
