import React from 'react';
import { ThemeProvider } from 'styled-components';

import { THEME } from 'metrics';
import { GlobalStyle } from 'styles';
import DesktopMenu from 'components/Menu/Desktop';
import MobileMenu from 'components/Menu/Mobile';

const PageLayout = ({ children }) => {
   return (
      <ThemeProvider theme={THEME}>
         <GlobalStyle />
         <DesktopMenu />
         <MobileMenu />
         {children}
      </ThemeProvider>
   );
};

export default PageLayout;
