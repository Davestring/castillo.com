import Container from 'components/elements/Container';
import Divider from 'components/elements/Divider';
import PropTypes from 'prop-types';
import { use100vh } from 'react-div-100vh';

import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import Wrapper from './components/Wrapper';

function Spotlight(props) {
  const { title, subtitle, ...rest } = props;
  const height = use100vh();

  return (
    <Container isFluid h={`${height}px`} {...rest}>
      <Wrapper>
        {title && (
          <>
            <Heading>{title}</Heading>
            <Divider bg="white" mb={4} />
          </>
        )}
        {subtitle && <SubHeading>{subtitle}</SubHeading>}
      </Wrapper>
    </Container>
  );
}

Spotlight.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default Spotlight;
