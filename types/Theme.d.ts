declare module 'CustomTheme' {
   type SpacingType = {
      layoutPadding: string;
      smallPadding: number;
   };

   export interface ThemeProps {
      primaryDark: string;
      primaryLight: string;
      primaryHover: string;
      mobile: string;
      desktopMenu: string;
      mobileMenu: string;
      desktopMenu: string;
      spacins: SpacingType;
   }

   export interface Theme {
      theme: ThemeProps;
   }
}
