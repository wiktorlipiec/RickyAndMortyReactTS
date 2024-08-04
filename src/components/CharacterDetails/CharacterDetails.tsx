import { type ICharacterDTO } from '../../types/character';
import {
  Details,
  Avatar,
  Heading1,
  Heading2,
  Text,
} from './CharacterDetails.style';
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
      <Heading1>{character.name}</Heading1>
      <Text>Status: {character.status}</Text>
      <Text>Species: {character.species}</Text>
      <Text>Gender: {character.gender}</Text>
      <Text>Origin: {character.origin.name}</Text>
      <Text>Location: {character.location.name}</Text>
      <Text>
        Created: {dayjs(character.created).format('YYYY-MM-DD HH:mm:ss')}
      </Text>
      <Heading2>Episodes:</Heading2>
      <ul>
        {character.episode.map((episode) => (
          <li key={episode}>{episode}</li>
        ))}
      </ul>
    </Details>
  );
};
