import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  background: #edeef0;
}
*, *::after, *::before {
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}
`