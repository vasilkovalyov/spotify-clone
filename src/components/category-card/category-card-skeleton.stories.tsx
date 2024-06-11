import type { Meta, StoryObj } from '@storybook/react';

import CategoryCardSkeleton from './category-card-skeleton';
import { model } from './category-card.model';

const meta = {
  title: 'Components/CategoryCard',
  component: CategoryCardSkeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CategoryCardSkeleton>;

export default meta;

type Story = StoryObj<typeof CategoryCardSkeleton>;

export const Skeleton: Story = {
  args: {
    ...model,
  },
  render: () => (
    <div style={{ width: '240px' }}>
      <CategoryCardSkeleton />
    </div>
  ),
};
