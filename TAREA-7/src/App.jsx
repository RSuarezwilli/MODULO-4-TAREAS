// src/App.jsx
import React from'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from'./HomePage';
import CharacterPage from'./pages/CharacterPage';
import EpisodesPage from'./pages/EpisodesPage';
import NotFoundPage from'./pages/NotFoundPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;


