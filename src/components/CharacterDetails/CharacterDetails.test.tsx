import { render, screen } from '../../tests/setup';
import { CharacterDetails } from './CharacterDetails';
import { characterDetailsMock } from '../../mocks/character';

describe('CharacterDetails', () => {
  it('renders character details', () => {
    render(<CharacterDetails character={characterDetailsMock} />);

    expect(screen.getByText(characterDetailsMock.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Status: ${characterDetailsMock.status}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Species: ${characterDetailsMock.species}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Gender: ${characterDetailsMock.gender}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Origin: ${characterDetailsMock.origin.name}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Location: ${characterDetailsMock.location.name}`)
    ).toBeInTheDocument();
  });
});
