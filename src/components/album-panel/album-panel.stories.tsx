import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import AlbumPanel from './album-panel';
import { model } from './album-panel.model';

const meta = {
  title: 'Components/AlbumPanel',
  component: AlbumPanel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AlbumPanel>;

export default meta;

type Story = StoryObj<typeof AlbumPanel>;

export const Default: Story = {
  args: {
    ...model,
  },
  render: (args) => (
    <MemoryRouter>
      <div style={{ width: '400px' }}>
        <AlbumPanel {...args} />
      </div>
    </MemoryRouter>
  ),
};
