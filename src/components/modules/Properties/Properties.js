import Container from 'components/elements/Container';
import H2 from 'components/elements/H2';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Property from './components/Property';

function Properties(props) {
  const { heading, properties, ...rest } = props;

  return (
    <Container {...rest}>
      {heading && (
        <H2 align="center" mb={12}>
          {heading}
        </H2>
      )}
      {properties.map(({ id, address, cover, description, title }) => (
        <Property
          key={nanoid()}
          {...{ id, address, cover, description, title }}
        ></Property>
      ))}
    </Container>
  );
}

Properties.propTypes = {
  heading: PropTypes.string,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      address: PropTypes.string,
      cover: PropTypes.string,
      description: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

Properties.defaultProps = {
  properties: [],
};

export default Properties;
