import type { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';
import { IconEnum } from './icon.type';

import { model } from './icon.model';

const meta = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    size: {
      control: { type: 'number' },
    },
    icon: {
      options: model,
      control: { type: 'select' },
    },
  },
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    size: 16,
    icon: IconEnum.HOME,
  },
  render: (args) => <Icon {...args} />,
};
