// RickAndMortyCharacterCard.jsx
import React from 'react';
import CharacterCard from './CharacterCard';
import CharacterData from './CharacterData';

const RickAndMortyCharacterCard = ({ characterId }) => {
  return <CharacterCard characterId={characterId} />;
};

export default CharacterData(RickAndMortyCharacterCard);
