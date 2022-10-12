import { Meta, Story } from '@storybook/react';

import { ITapestryIconProps, TapestryIcon } from '..';

export default {
  component: TapestryIcon,
  title: 'Elements/TapestryIcon',
} as Meta;

const Template: Story<ITapestryIconProps> = (args) => (
  <TapestryIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: 304,
  width: 304,
};
