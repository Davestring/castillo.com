import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { isNil } from 'utils/children-utils';

const Item = styled(Box)`
  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};
`;

function GridItem(props) {
  const { children, column, row, ...rest } = props;

  if (isNil(children)) return null;
  return (
    <Item column={column} row={row} {...rest}>
      {children}
    </Item>
  );
}

GridItem.propTypes = {
  children: PropTypes.node,
  column: PropTypes.string,
  row: PropTypes.string,
};

GridItem.defaultProps = {};

export default GridItem;
