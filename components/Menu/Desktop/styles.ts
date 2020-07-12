import styled from 'styled-components';
import { Theme } from 'CustomTheme';

export const Wrapper = styled.nav`
   display: flex;
   width: 100%;
   font-weight: 800;
   justify-content: center;
   text-transform: uppercase;
   color: ${({ theme }: Theme) => theme.primaryDark};
   background-color: ${({ theme }: Theme) => theme.desktopMenu};

   @media (max-width: ${({ theme }: Theme) => theme.mobile}) {
      display: none;
   }
`;
