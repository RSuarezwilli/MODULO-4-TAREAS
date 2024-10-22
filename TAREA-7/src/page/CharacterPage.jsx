import React, { useEffect, useState } from 'react'


const CharacterPage = () => {
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
    <div className='personajes'>
      <h1>Personajes de Rick and Morty</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}
            <img src={character.image} alt={character.name}></img>
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
  )
}

export default CharacterPage