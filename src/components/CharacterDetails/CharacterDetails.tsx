import { type ICharacterDTO } from '../../types/character';
import { Details, Avatar } from './CharacterDetails.style';
import dayjs from 'dayjs';

interface ICharacterDetailsProps {
  character: ICharacterDTO;
}

export const CharacterDetails: React.FC<ICharacterDetailsProps> = ({
  character,
}) => {
  return (
    <Details>
      <Avatar src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <p>Created: {dayjs(character.created).format('YYYY-MM-DD HH:mm:ss')}</p>
      <h2>Episodes:</h2>
      <ul>
        {character.episode.map((episode) => (
          <li key={episode}>{episode}</li>
        ))}
      </ul>
    </Details>
  );
};
