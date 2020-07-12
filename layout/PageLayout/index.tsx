import React from 'react';
import { ThemeProvider } from 'styled-components';

import { THEME } from 'metrics';
import { GlobalStyle } from 'styles';

const PageLayout = ({ children }) => {
   return (
      <ThemeProvider theme={THEME}>
         <GlobalStyle />
         {children}
      </ThemeProvider>
   );
};

export default PageLayout;
