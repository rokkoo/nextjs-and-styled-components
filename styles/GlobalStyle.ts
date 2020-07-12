import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    background: #0D0C1D;
    color: #EFFFFA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    text-rendering: optimizeLegibility;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  `;
