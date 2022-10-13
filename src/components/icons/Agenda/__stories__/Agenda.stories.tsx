import { Meta, Story } from '@storybook/react';

import { AgendaIcon, IAgendaIconProps } from '..';

export default {
  component: AgendaIcon,
  title: 'Icons/AgendaIcon',
} as Meta;

const Template: Story<IAgendaIconProps> = (args) => <AgendaIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'blue.700',
  height: 150,
  width: 154,
};
