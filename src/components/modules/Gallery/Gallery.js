import { Image } from '@chakra-ui/react';
import Grid from 'components/collections/Grid';
import Container from 'components/elements/Container';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Gallery(props) {
  const { content, ...rest } = props;
  return (
    <Container isFluid {...rest}>
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
};

Gallery.defaultProps = {
  content: [],
};

export default Gallery;
