import { Meta, Story } from '@storybook/react';

import { EmptySearchIcon, IEmptySearchIconProps } from '..';

export default {
  component: EmptySearchIcon,
  title: 'Icons/EmptySearchIcon',
} as Meta;

const Template: Story<IEmptySearchIconProps> = (args) => (
  <EmptySearchIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary.700',
  height: 300,
  width: 368,
};
