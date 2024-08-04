import type { Meta, StoryObj } from '@storybook/react';
import { CharacterDetails } from './CharacterDetails';
import { characterDetailsMock } from '../../mocks/character';

const meta: Meta<typeof CharacterDetails> = {
  component: CharacterDetails,
};

export default meta;
type Story = StoryObj<typeof CharacterDetails>;

export const Primary: Story = {
  args: {
    character: characterDetailsMock,
  },
};
