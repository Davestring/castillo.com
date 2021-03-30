import { Flex as ChakraFlex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import isEmpty from 'lodash/isEmpty';
import { nanoid } from 'nanoid';
import { Link as ReachLink } from 'next/link';
import PropTypes from 'prop-types';

const ItemWrapper = styled(ChakraFlex)`
  align-items: center;
  color: ${({ theme }) => theme.colors.base};
  display: flex;
  height: 100%;
  padding: 0 ${({ theme }) => theme.space[2]};
  transition: 0.5s ease;

  &:hover {
    border-bottom-width: 2px;
    border-color: ${({ theme }) => theme.colors.base};
    transition: border-color 1s ease;
  }
`;

function Navigation(props) {
  const { routes, ...rest } = props;

  if (isEmpty(routes)) return null;

  return (
    <Stack {...rest}>
      {routes.map((item) => (
        <Link as={ReachLink} href={item.url} key={nanoid()}>
          <ItemWrapper>
            <Text fontSize="sm">{item.title}</Text>
          </ItemWrapper>
        </Link>
      ))}
    </Stack>
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  isInline: true,
  height: '100%',
  routes: [],
};

export default Navigation;
