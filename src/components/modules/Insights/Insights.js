import Container from 'components/elements/Container';
import H2 from 'components/elements/H2';
import InsightCard from 'components/elements/InsightCard';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Caption from './components/Caption';
import Summary from './components/Summary';
import Title from './components/Title';

function Insights(props) {
  const { heading, insights, ...rest } = props;

  return (
    <Container {...rest}>
      {heading && (
        <H2 align="center" mb={12}>
          {heading}
        </H2>
      )}
      {insights.map(({ alt, image, isReverse, caption, summary, title }) => (
        <InsightCard
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
        </InsightCard>
      ))}
    </Container>
  );
}

Insights.propTypes = {
  heading: PropTypes.string,
  insights: PropTypes.arrayOf(
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

Insights.defaultProps = {
  insights: [],
};

export default Insights;
