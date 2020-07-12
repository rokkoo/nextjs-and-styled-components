import styled from 'styled-components';
import { Theme } from 'CustomTheme';

export const Wrapper = styled.nav`
   display: flex;
   width: 100%;
   color: ${({ theme }: Theme) => theme.primaryDark};
   background-color: ${({ theme }) => theme.mobileMenu};
   padding-left: ${({ theme }: Theme) => theme.spacins.smallPadding}px;
   text-transform: uppercase;

   @media (min-width: ${({ theme }: Theme) => theme.mobile}) {
      display: none;
   }
`;
