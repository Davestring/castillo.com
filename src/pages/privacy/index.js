import H1 from 'components/elements/H1';

function Privacy(props) {
  const { ...rest } = props;
  return <H1 {...rest}>privacy page</H1>;
}

export default Privacy;
