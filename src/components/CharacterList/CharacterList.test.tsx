import { render, screen } from '../../tests/setup';
import { CharacterList } from './CharacterList';
import { charactersMock } from '../../mocks/character';

describe('CharacterList', () => {
  it('renders character list', () => {
    render(<CharacterList characters={charactersMock} />);

    expect(screen.getByText(charactersMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(charactersMock[0].status)).toBeInTheDocument();
    expect(screen.getByText(charactersMock[0].species)).toBeInTheDocument();
    expect(
      screen.getByText(charactersMock[0].location.name)
    ).toBeInTheDocument();
    expect(screen.getByAltText(charactersMock[0].name)).toBeInTheDocument();

    expect(screen.getByText(charactersMock[1].name)).toBeInTheDocument();
    expect(screen.getByText(charactersMock[1].status)).toBeInTheDocument();
    expect(screen.getByText(charactersMock[1].species)).toBeInTheDocument();
    expect(
      screen.getByText(charactersMock[1].location.name)
    ).toBeInTheDocument();
    expect(screen.getByAltText(charactersMock[1].name)).toBeInTheDocument();
  });
});
