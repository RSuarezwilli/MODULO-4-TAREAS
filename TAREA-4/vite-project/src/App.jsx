import { useEffect,useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = 22;

  useEffect(() => {
    
    fetch("https://rickandmortyapi.com/api/character/" + rickAndMortyCharacterId)
      .then((response) => response.json()) 
      .then((result) => {
        
        console.log(); 

        
        setName(result.name);
        setImage(result.image);
        setGenre(result.gender);
        setStatus(result.status);
      })
      .catch((error) => console.error("Error fetching character:", error));
  }, []); 

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p> {genre}</p>
      <p>{status}</p>
    </div>
  );
}

export default App;
