import type { Meta, StoryObj } from '@storybook/react';

import TrackSkeleton from './track-skeleton';
import { model } from './track.model';

const meta = {
  title: 'Components/Track',
  component: TrackSkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrackSkeleton>;

export default meta;

type Story = StoryObj<typeof TrackSkeleton>;

export const Skeleton: Story = {
  args: {
    ...model,
  },
  render: () => (
    <div style={{ width: '400px' }}>
      <TrackSkeleton />
    </div>
  ),
};
