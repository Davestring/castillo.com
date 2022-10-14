import { Link, Text, TextProps } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

import { BlueDiv } from './components/BlueDiv';
import { Wrapper } from './components/Wrapper';

export interface INavLinkProps extends TextProps {
  /**
   * Router link to redirect on click events.
   */
  to: string;
}

export const NavLink: React.FC<INavLinkProps> = (props): JSX.Element => {
  const { children, to, ...rest } = props;

  return (
    <Link as={ReachLink} to={to}>
      <Wrapper>
        <Text {...rest}>{children}</Text>
        <BlueDiv />
      </Wrapper>
    </Link>
  );
};

NavLink.defaultProps = {
  fontSize: 'sm',
  fontWeight: 'bold',
};
