import { Typography } from '@mui/material';
import React from 'react';
import './App.css';
import ButtonAppBar from './components/common/ButtonAppBar';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <br></br>
      <Typography variant="h6" gutterBottom component="div">
      Read articles and breaking news headlines from news sources and blogs across the web with News Reader website!
      </Typography>
      <br></br>
      <NewsList />
    </div>
  );
}

export default App;
