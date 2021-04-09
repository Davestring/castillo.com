import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Default = (props) => {
  const { alt, image, ...rest } = props;

  return <Image alt={alt} src={image} {...rest}></Image>;
};

Default.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.string,
};

Default.defaultProps = {
  alt: 'gallery-item',
  cursor: 'pointer',
  fit: 'cover',
  h: '100%',
  transition: '0.5s filter linear',
  w: '100%',
  sx: {
    ':hover': {
      filter: 'brightness(66%)',
    },
  },
};

export default Default;
