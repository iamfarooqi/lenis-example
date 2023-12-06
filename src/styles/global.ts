import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import vw from './vw';

import './fonts.css';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0;
    color: ${theme.color.white};
    background: ${theme.color.blue};
    font-family: ${theme.font.family};
  }

  h1 {
    ${vw([['font-size', 72, 48, 36]])}
    font-weight: normal;
    letter-spacing: -1px;
  }

  h2 {
    ${vw([['font-size', 72, 48, 24]])}
    font-weight: normal;
    letter-spacing: -1px;
  }
  h3 {
    ${vw([['font-size', 36, 24, 18]])}
    font-weight: normal;
    letter-spacing: -1px;
  }

  button, a {
    font-weight: bold;
    background: ${theme.color.magenta};
    color: ${theme.color.black};
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;
    ${vw([
      ['font-size', 18, 14, 10],
      ['padding', 12, 12, 8],
      ['padding-left', 24, 24, 12],
      ['padding-right', 24, 24, 12],
    ])}
    &:hover {
      box-shadow: ${theme.color.magenta} 0px 0px 18px;
    }
  }
`;
