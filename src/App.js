import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import './App.css';
import Logo from './components/header/logo';
import SearchForm from './components/header/search-form';
import Notifications from './components/header/notifications';
import Example from './components/header/dropdown';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <header className="header">
          <Logo />
          <SearchForm/>
          <Notifications /> 
          <Example />

          </header>
      </>
    </ThemeProvider>
  );
}

export default App;
