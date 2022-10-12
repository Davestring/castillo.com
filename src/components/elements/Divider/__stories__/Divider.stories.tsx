import { Meta, Story } from '@storybook/react';

import { Divider, IDividerProps } from '..';

export default {
  component: Divider,
  title: 'Elements/Divider',
} as Meta;

const Template: Story<IDividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  bg: 'black',
};
