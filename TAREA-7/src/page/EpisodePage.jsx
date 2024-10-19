// src/pages/EpisodesPage.jsx
import React, { useState, useEffect } from 'react';

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results))
      .catch((error) => console.error('Error fetching episodes:', error));
  }, [page]);

  const handleNextPage = () => setPage(page + 1);
  const handlePreviousPage = () => setPage(page > 1 ? page - 1 : 1);

  return (
    <div>
      <h1>Episodios de Rick and Morty</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            {episode.name} - {episode.air_date}
          </li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={handleNextPage}>
        Siguiente
      </button>
    </div>
  );
}

export default EpisodesPage;
