import Container from 'components/elements/Container';
import Divider from 'components/elements/Divider';
import H1 from 'components/elements/H1';
import PropTypes from 'prop-types';
import { use100vh } from 'react-div-100vh';

import Quote from './components/Quote';
import Wrapper from './components/Wrapper';

function Spotlight(props) {
  const { title, quote, ...rest } = props;
  const height = use100vh();

  return (
    <Container isFluid h={`${height}px`} {...rest}>
      <Wrapper>
        {title && (
          <>
            <H1 color="white" align="center">
              {title}
            </H1>
            <Divider bg="white" mb={4} />
          </>
        )}
        {quote && <Quote>{quote}</Quote>}
      </Wrapper>
    </Container>
  );
}

Spotlight.propTypes = {
  quote: PropTypes.string,
  title: PropTypes.string,
};

export default Spotlight;
