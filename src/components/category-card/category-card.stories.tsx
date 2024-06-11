import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import CategoryCard from './category-card';
import { model } from './category-card.model';

const meta = {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: {
      control: { type: 'color' },
    },
  },
} satisfies Meta<typeof CategoryCard>;

export default meta;

type Story = StoryObj<typeof CategoryCard>;

export const Default: Story = {
  args: {
    ...model,
  },
  render: (args) => (
    <MemoryRouter>
      <div style={{ width: '240px' }}>
        <CategoryCard {...args} backgroundColor="rgb(0, 100, 80)" />
      </div>
    </MemoryRouter>
  ),
};
