import React from 'react';
import './CharacterCard.css'; 

const CharacterCard = ({ name, image, gender, status }) => {
  return (
    <div className="charactercard">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{gender}</p>
      <p>{status.vivo}</p>
    </div>
  );
};

export default CharacterCard;

