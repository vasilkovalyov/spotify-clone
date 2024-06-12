import type { Meta, StoryObj } from '@storybook/react';

import MediaCardSkeleton from './media-card-skeleton';

const meta = {
  title: 'Components/MediaCard',
  component: MediaCardSkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MediaCardSkeleton>;

export default meta;

type Story = StoryObj<typeof MediaCardSkeleton>;

export const Skeleton: Story = {
  render: () => (
    <div style={{ width: '240px' }}>
      <MediaCardSkeleton />
    </div>
  ),
};
