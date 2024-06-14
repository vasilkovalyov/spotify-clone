import type { Meta, StoryObj } from '@storybook/react';

import BlockBannerArtist from './block-banner-artist';

const meta = {
  title: 'Blocks/BlockBannerArtist',
  component: BlockBannerArtist,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof BlockBannerArtist>;

export default meta;

type Story = StoryObj<typeof BlockBannerArtist>;

export const Default: Story = {};
