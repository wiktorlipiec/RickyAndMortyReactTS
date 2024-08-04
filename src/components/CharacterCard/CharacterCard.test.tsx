import { render, screen } from '../../tests/setup';
import { CharacterCard } from './CharacterCard';
import { characterMock } from '../../mocks/character';

describe('CharacterCard', () => {
  it('renders character card', () => {
    render(
      <CharacterCard
        character={characterMock}
        link={`/character/${characterMock.id}`}
      />
    );

    expect(screen.getByText(characterMock.name)).toBeInTheDocument();
    expect(screen.getByText(characterMock.status)).toBeInTheDocument();
    expect(screen.getByText(characterMock.species)).toBeInTheDocument();
    expect(screen.getByText(characterMock.location.name)).toBeInTheDocument();
    expect(screen.getByAltText(characterMock.name)).toBeInTheDocument();
  });
});
