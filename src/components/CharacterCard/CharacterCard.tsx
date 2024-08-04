import React from 'react';
import { Card, Avatar, Name, Status } from './CharacterCard.style';
import { type ICharacter } from '../../types/character';

interface ICharacterCardProps {
  character: ICharacter;
  link: string;
}

export const CharacterCard: React.FC<ICharacterCardProps> = ({
  character,
  link,
}) => {
  return (
    <Card to={link}>
      <Avatar src={character.image} alt={character.name} />
      <Name>{character.name}</Name>
      <Status>{character.status}</Status>
      <p>{character.species}</p>
      <p>{character.location?.name}</p>
    </Card>
  );
};
