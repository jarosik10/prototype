import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
}

a,
area,
input,
select,
textarea,
button,
iframe,
[tabindex],
[contentEditable=true]
{
  :focus {
    outline: 1px solid ${({theme}) => theme.colors.blue}
  }
}
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
            {children}
    </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout;