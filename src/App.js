import React from 'react';
import { Header } from './components/Header';
import { Scoreboard } from './components/Scoreboard';
import { ScoreList } from './components/ScoreList';
import { AddScore } from './components/AddScore';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Scoreboard />
        <ScoreList />
        <AddScore />
      </div>
    </GlobalProvider>
  );
}

export default App;
