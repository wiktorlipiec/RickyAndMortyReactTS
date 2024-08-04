import type { Meta, StoryObj } from '@storybook/react';
import { CharacterList } from './CharacterList';
import { charactersMock } from '../../mocks/character';

const meta: Meta<typeof CharacterList> = {
  component: CharacterList,
};

export default meta;
type Story = StoryObj<typeof CharacterList>;

export const Primary: Story = {
  args: {
    characters: charactersMock,
  },
};
