import Container from 'components/elements/Container';
import H2 from 'components/elements/H2';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Insight from './components/Insight';

function Insights(props) {
  const { heading, insights, ...rest } = props;

  return (
    <Container {...rest}>
      {heading && (
        <H2 align="center" mb={12}>
          {heading}
        </H2>
      )}
      {insights.map(({ cover: image, isReverse, caption, summary, title }) => (
        <Insight
          key={nanoid()}
          {...{
            caption,
            image,
            isReverse,
            summary,
            title,
          }}
        ></Insight>
      ))}
    </Container>
  );
}

Insights.propTypes = {
  heading: PropTypes.string,
  insights: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      cover: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
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
