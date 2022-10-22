import { Meta, Story } from '@storybook/react';

import { IWorkInProgressIconProps, WorkInProgressIcon } from '..';

export default {
  component: WorkInProgressIcon,
  title: 'Icons/WorkInProgressIcon',
} as Meta;

const Template: Story<IWorkInProgressIconProps> = (args) => (
  <WorkInProgressIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary.700',
  height: 350,
  width: 416,
};
