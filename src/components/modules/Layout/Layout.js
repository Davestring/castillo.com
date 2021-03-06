import PropTypes from 'prop-types';

import ISOContainer from './components/ISOContainer';
import Wrapper from './components/Wrapper';

function Layout(props) {
  const { children, ...rest } = props;
  return (
    <Wrapper {...rest}>
      <ISOContainer as="main">{children}</ISOContainer>
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
