import { Meta, Story } from '@storybook/react';

import { H1, IH1Props } from '..';
import { CHILDREN } from '../__mocks__';

export default {
  component: H1,
  title: 'Typography/H1',
} as Meta;

const Template: Story<IH1Props> = (args) => <H1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: CHILDREN,
};
