import { Image } from '@chakra-ui/react';
import Grid from 'components/collections/Grid';
import Container from 'components/elements/Container';
import H2 from 'components/elements/H2';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { GALLERY_DATA } from './__mocks__';

function Gallery(props) {
  const { content, heading, ...rest } = props;
  return (
    <Container isFluid {...rest}>
      {heading && (
        <H2 align="center" mb={12}>
          {heading}
        </H2>
      )}
      <Grid templateCols="repeat(8, 1fr)" templateRows="repeat(7, 5vw)" gap={2}>
        {content.map(({ alt, image, gridColumn, gridRow }) => (
          <Grid.Item key={nanoid()} column={gridColumn} row={gridRow}>
            <Image alt={alt} src={image} fit="cover" h="100%" w="100%"></Image>
          </Grid.Item>
        ))}
      </Grid>
    </Container>
  );
}

Gallery.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      image: PropTypes.string,
      girdColumn: PropTypes.string,
      gridRow: PropTypes.string,
    }),
  ),
  heading: PropTypes.string,
};

Gallery.defaultProps = {
  content: GALLERY_DATA,
};

export default Gallery;
