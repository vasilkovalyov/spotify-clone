import type { Meta, StoryObj } from '@storybook/react';
import ProgressSlider from './progress-slider';

const meta = {
  title: 'UI/Progress Slider',
  component: ProgressSlider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ProgressSlider>;

export default meta;

type Story = StoryObj<typeof ProgressSlider>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <ProgressSlider {...args} />
    </div>
  ),
};
