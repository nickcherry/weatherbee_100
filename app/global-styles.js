import { injectGlobal } from 'styled-components';
import { getDefaultFont } from './utils/styleHelpers';

import latoLightLatin from 'fonts/lato_light_latin.woff2';
import latoLightLatinExt from 'fonts/lato_light_latin_ext.woff2';
import latoRegularLatin from 'fonts/lato_regular_latin.woff2';
import latoRegularLatinExt from 'fonts/lato_regular_latin_ext.woff2';

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

  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local('Lato Light'), local('Lato-Light'), url(${latoLightLatin}) format('woff2');
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local('Lato Light'), local('Lato-Light'), url(${latoLightLatinExt}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(${latoRegularLatin}) format('woff2');
    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(${latoRegularLatinExt}) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  #app {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
  }

  .main-content-appear,
  .main-content-enter {
    opacity: 0;
    transition: opacity 350ms ease-out;
    &.main-content-appear-active,
    &.main-content-enter-active {
      opacity: 1;
    }
  }

  .main-content-leave {
    opacity: 1;
    &.main-content-leave-active {
      opacity: 0;
      transition: opacity 350ms ease-out;
    }
  }
`;
