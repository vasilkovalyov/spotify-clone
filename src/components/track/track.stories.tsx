import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Track from './track';
import { model } from './track.model';

const meta = {
  title: 'Components/Track',
  component: Track,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Track>;

export default meta;

type Story = StoryObj<typeof Track>;

export const Default: Story = {
  args: {
    ...model,
  },
  render: (args) => (
    <MemoryRouter>
      <div style={{ width: '400px' }}>
        <Track {...args} />
      </div>
    </MemoryRouter>
  ),
};
