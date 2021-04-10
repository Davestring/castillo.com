import { Flex as ChakraFlex, Link, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link as ReachLink } from 'next/link';
import PropTypes from 'prop-types';

const ItemWrapper = styled(ChakraFlex)`
  align-items: center;
  color: ${({ theme }) => theme.colors.base};
  display: flex;
  height: 100%;
  transition: 0.2s ease;

  &:hover {
    border-bottom-width: 2px;
    border-color: ${({ theme }) => theme.colors.base};
    font-weight: 700;
    transition: border-color 1s ease;
  }
`;

function NavLink(props) {
  const { title, url, ...rest } = props;

  if (title === '' || title === null || title === undefined) return null;

  return (
    <Link as={ReachLink} href={url} {...rest}>
      <ItemWrapper>
        <Text fontSize="sm">{title}</Text>
      </ItemWrapper>
    </Link>
  );
}

NavLink.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

NavLink.defaultProps = {
  sx: {
    ':not(:last-child)': {
      mr: 4,
    },
  },
  url: '#',
};

export default NavLink;
