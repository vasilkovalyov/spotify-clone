import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import { model } from '../icon/icon.model';
import { IconEnum } from '../icon';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      options: model,
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
};

export const Icon: Story = {
  args: {
    icon: IconEnum.CROSS,
  },
  render: (args) => <Button {...args} />,
};
