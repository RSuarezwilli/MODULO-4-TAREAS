import { useEffect, useState } from "react";
import CharacterCard from "./ComponentCaracterCard/characterCard";
import "./App.css";

function App() {
  const [charactersList, setCharactersList] = useState([]);

  useEffect(() => {
    // Este useEffect se ejecutará una única vez cuando el componente se monte
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((data) => {
        // Acá podemos procesar la respuesta del endpoint
        console.log(data); // Resultado del endpoint

        // Utiliza la variable data para actualizar la variable de estado del paso 1
        setCharactersList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and morty</h1>
      {charactersList.map((character) => {
        return (
          <CharacterCard
            nombre={character.name}
            img={character.image}
            estado={character.status}
            fechaCreacion={character.created}
          />
        );
      })}
    </div>
  );
}

export default App;
