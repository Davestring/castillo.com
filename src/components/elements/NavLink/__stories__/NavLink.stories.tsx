import { Box } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';

import { INavLinkProps, NavLink } from '..';
import { LABEL, TO } from '../__mocks__';

export default {
  component: NavLink,
  title: 'Elements/NavLink',
} as Meta;

const Template: Story<INavLinkProps> = (args): JSX.Element => (
  <Box h={20} w={36}>
    <NavLink {...args}>{LABEL}</NavLink>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  to: TO,
};
