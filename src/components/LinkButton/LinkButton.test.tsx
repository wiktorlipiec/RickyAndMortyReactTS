import { render, screen } from '../../tests/setup';
import { LinkButton } from './LinkButton';

describe('LinkButton', () => {
  it('renders button with link', () => {
    render(<LinkButton to="/test">Test</LinkButton>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
