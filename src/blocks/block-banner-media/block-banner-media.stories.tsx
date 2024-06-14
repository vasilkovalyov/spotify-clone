import type { Meta, StoryObj } from '@storybook/react';

import BlockBannerMedia from './block-banner-media';
import { MemoryRouter } from 'react-router-dom';
import { model } from './block-banner-media.model';

const meta = {
  title: 'Blocks/BlockBannerMedia',
  component: BlockBannerMedia,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BlockBannerMedia>;

export default meta;

type Story = StoryObj<typeof BlockBannerMedia>;

export const Default: Story = {
  args: {
    ...model,
  },
  render: (args) => (
    <MemoryRouter>
      <BlockBannerMedia {...args} />
    </MemoryRouter>
  ),
};
