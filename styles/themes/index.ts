import { createGlobalStyle } from 'styled-components';

const themeDefault = {
  colors: {
    brick: '#cc6566',
    darkBrick: '#954546',
    darkBlue: '#071a2e'
  }
};

export const themeLight = {
  ...themeDefault
};

export const themeDark = {
  ...themeDefault
};

export const GlobalStyles = createGlobalStyle``;
