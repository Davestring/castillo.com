import { Flex, FlexProps, Image, Text } from '@chakra-ui/react';
import Logo from 'assets/img/logo.dark.png';

export type IHeaderProps = FlexProps;

export const Header: React.FC<IHeaderProps> = (props): JSX.Element => (
  <Flex as="header" {...props}>
    <Image src={Logo} w={256} />
  </Flex>
);

Header.defaultProps = {
  align: 'center',
  direction: 'column',
};
