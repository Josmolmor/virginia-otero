import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import addAlpha from '../utils/addAlpha';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    box-sizing: border-box;
  }
  
  #__next {
    display: flex;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  div,
  img,
  p,
  span,
  em,
  label,
  strong,
  a {
    &::-moz-selection {
      /* Code for Firefox */
      background: ${addAlpha('#FF707E', 0.5)};
    }

    &::selection {
      background: ${addAlpha('#FF707E', 0.5)};
    }
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 4px solid #B83E4B;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #B83E4B transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`;

export default GlobalStyle;
