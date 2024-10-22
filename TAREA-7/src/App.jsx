import React from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/error/Homepage/HomePage';
import EpisodesPage from './page/EpisodePage';
import CharacterPage from './page/CharacterPage';
import NotFound from './page/error/notFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


