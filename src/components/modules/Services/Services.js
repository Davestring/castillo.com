import Container from 'components/elements/Container';
import H2 from 'components/elements/H2';
import Quote from 'components/elements/Quote';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Caption from './components/Caption';
import Summary from './components/Summary';
import Title from './components/Title';

function Services(props) {
  const { services, heading, ...rest } = props;

  if (!Array.isArray(services) || services.length === 0) return null;
  return (
    <Container {...rest}>
      {heading && (
        <H2 align="center" mb={12}>
          {heading}
        </H2>
      )}
      {services.map(({ alt, image, isReverse, caption, summary, title }) => (
        <Quote
          alt={alt}
          image={image}
          isReverse={isReverse}
          key={nanoid()}
          mb={12}
        >
          {() => (
            <>
              <Caption>{caption}</Caption>
              <Title mb={2}>{title}</Title>
              <Summary>{summary}</Summary>
            </>
          )}
        </Quote>
      ))}
    </Container>
  );
}

Services.propTypes = {
  heading: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      caption: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
      summary: PropTypes.string,
      title: PropTypes.string,
      isReverse: PropTypes.bool,
    }),
  ),
};

Services.defaultProps = {
  services: [],
};

export default Services;
