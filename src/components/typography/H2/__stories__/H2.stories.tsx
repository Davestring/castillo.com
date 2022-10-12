import { Meta, Story } from '@storybook/react';

import { H2, IH2Props } from '..';
import { CHILDREN } from '../__mocks__';

export default {
  component: H2,
  title: 'Typography/H2',
} as Meta;

const Template: Story<IH2Props> = (args) => <H2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: CHILDREN,
};
