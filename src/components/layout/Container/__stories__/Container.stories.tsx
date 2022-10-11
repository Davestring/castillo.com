import { Meta, Story } from '@storybook/react';

import { Container, IContainerProps } from '..';
import { CHILDREN, DEFAULT_PROPS } from '../__mocks__';

export default {
  component: Container,
  title: 'Layout/Container',
} as Meta;

const Template: Story<IContainerProps> = ({ children, ...args }) => (
  <Container {...args}>{children}</Container>
);

export const Default = Template.bind({});
Default.args = {
  ...DEFAULT_PROPS,
  children: <CHILDREN />,
};

export const WithIsFluid = Template.bind({});
WithIsFluid.args = {
  ...DEFAULT_PROPS,
  children: <CHILDREN />,
  isFluid: true,
};
