
import React from 'react';
import './App.css';
import Layout from './Component/NavBar/MainPage/Layout';
import NavBar from './Component/NavBar/NavBar';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

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

      <NavBar />
      <Layout />
    </div>
  );
}

export default App;
