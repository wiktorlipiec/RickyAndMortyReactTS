import type { Meta, StoryObj } from '@storybook/react';
import { CharacterCard } from './CharacterCard';
import { characterMock } from '../../mocks/character';

const meta: Meta<typeof CharacterCard> = {
  component: CharacterCard,
};

export default meta;
type Story = StoryObj<typeof CharacterCard>;

export const Primary: Story = {
  args: {
    character: characterMock,
  },
};
