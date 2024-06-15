import type { Meta, StoryObj } from '@storybook/react';
import Volume from './volume';

const meta = {
  title: 'Components/Volume',
  component: Volume,
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof Volume>;

export default meta;

type Story = StoryObj<typeof Volume>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Volume {...args} />
    </div>
  ),
};
