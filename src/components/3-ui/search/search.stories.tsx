import type { Meta, StoryObj } from '@storybook/react';
import Search from './search';

const meta = {
  title: 'UI/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['default', 'expanded'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: (args) => <Search {...args} />,
};
