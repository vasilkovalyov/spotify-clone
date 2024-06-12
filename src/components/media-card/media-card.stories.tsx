import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MediaCard from './media-card';
import { model } from './media-card.model';

const meta = {
  title: 'Components/MediaCard',
  component: MediaCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MediaCard>;

export default meta;

type Story = StoryObj<typeof MediaCard>;

export const Default: Story = {
  args: {
    ...model,
  },
  render: (args) => (
    <MemoryRouter>
      <div style={{ width: '240px' }}>
        <MediaCard {...args} />
      </div>
    </MemoryRouter>
  ),
};
