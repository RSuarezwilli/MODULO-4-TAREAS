// src/pages/CharacterPage.jsx
import React, { useState, useEffect } from 'react';

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching characters:', error));
  }, [page]);

  const handleNextPage = () => setPage(page + 1);
  const handlePreviousPage = () => setPage(page > 1 ? page - 1 : 1);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}
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

export default CharacterPage;
