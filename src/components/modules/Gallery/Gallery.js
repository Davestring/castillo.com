import Grid from 'components/collections/Grid';
import Container from 'components/elements/Container';
import H2 from 'components/elements/H2';
import _ from 'lodash';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { GALLERY_DATA } from './__mocks__';
import Default from './components/Default';

function Gallery(props) {
  const { cols, content, gridH, heading, isFluid, rows, ...rest } = props;

  if (_.isEmpty(content)) return null;

  return (
    <Container isFluid={isFluid} {...rest}>
      {heading && (
        <H2 align="center" mb={12}>
          {heading}
        </H2>
      )}
      <Grid templateCols={cols} templateRows={rows} gap={2} h={gridH}>
        {content.map(({ alt, image, gridColumn, gridRow }) => (
          <Grid.Item key={nanoid()} column={gridColumn} row={gridRow}>
            <Default {...{ alt, image }}></Default>
          </Grid.Item>
        ))}
      </Grid>
    </Container>
  );
}

Gallery.propTypes = {
  cols: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      image: PropTypes.string,
      girdColumn: PropTypes.string,
      gridRow: PropTypes.string,
    }),
  ),
  gridH: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  heading: PropTypes.string,
  isFluid: PropTypes.boolean,
  rows: PropTypes.string,
};

Gallery.defaultProps = {
  content: GALLERY_DATA,
  gridH: '100%',
  isFluid: false,
};

export default Gallery;
