import H1 from 'components/elements/H1';

function Terms(props) {
  const { ...rest } = props;
  return <H1 {...rest}>terms page</H1>;
}

export default Terms;
