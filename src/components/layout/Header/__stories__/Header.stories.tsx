import { Meta, Story } from '@storybook/react';

import { Header, IHeaderProps } from '..';

export default {
  component: Header,
  title: 'Layout/Header',
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
