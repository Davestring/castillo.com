import { Box } from '@chakra-ui/react';
import { isNil } from 'components/lib/children';
import PropTypes from 'prop-types';

import GridItem from './GridItem';

function Grid(props) {
  const { children, column, gap, templateCols, templateRows, ...rest } = props;

  if (isNil(children)) return null;

  return (
    <Box
      display="grid"
      gridColumn={column}
      gridGap={gap}
      gridTemplateColumns={templateCols}
      gridTemplateRows={templateRows}
      {...rest}
    >
      {children}
    </Box>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  column: PropTypes.string,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  templateCols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  templateRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Grid.defaultProps = {
  column: 'full-start / full-end',
};

Grid.Item = GridItem;

export default Grid;
