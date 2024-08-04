import { List } from './CharacterList.style';
import { type ICharacter } from '../../types/character';
import { CharacterCard } from '../CharacterCard';

interface ICharacterListProps {
  characters: ICharacter[];
}

export const CharacterList: React.FC<ICharacterListProps> = ({
  characters,
}) => {
  return (
    <List>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          link={`/character/${character.id}`}
        />
      ))}
    </List>
  );
};
