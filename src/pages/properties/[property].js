import H1 from 'components/elements/H1';

function Property(props) {
  const { ...rest } = props;
  return <H1 {...rest}>property page</H1>;
}

export default Property;
