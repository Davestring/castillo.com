import H1 from 'components/elements/H1';

function About(props) {
  const { ...rest } = props;
  return <H1 {...rest}>about page</H1>;
}

export default About;
