import { injectGlobal } from 'styled-components';
import { getDefaultFont } from './utils/styleHelpers';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }
  html {
    height: 100%;
    width: 100%;
  }
  body {
    min-height: 100%;
    height: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: ${getDefaultFont()}, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
  }

  #ventilator-page {
    &.transition-appear {
      background: red;
      &.transition-appear-active {
        background: blue;
      }
    }
  }

  #patient-history-page {
    &.transition-appear {
      background: yellow;
      &.transition-appear-active {
        background: green;
      }
    }
  }
`;
