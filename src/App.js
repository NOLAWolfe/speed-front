
import React from 'react';
import './App.css';
import Layout from './Component/MainPage/Layout.js';
import NavBar from './Component/NavBar/NavBar';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import LoginHome from './Component/LoginHome/LoginHome';

const darkTheme = createTheme({
  palette: {
    mode:'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
{/* <LoginHome/> */}
      {
        localStorage.getItem("user")==undefined ? <LoginHome/> : <span><NavBar/><Layout/></span>
      }
    </div>
  );
}

export default App;
