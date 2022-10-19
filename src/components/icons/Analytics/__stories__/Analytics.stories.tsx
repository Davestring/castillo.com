import { Meta, Story } from '@storybook/react';

import { AnalyticsIcon, IAnalyticsIconProps } from '..';

export default {
  component: AnalyticsIcon,
  title: 'Icons/AnalyticsIcon',
} as Meta;

const Template: Story<IAnalyticsIconProps> = (args) => (
  <AnalyticsIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary.700',
  height: 226,
  width: 341,
};
