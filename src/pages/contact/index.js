import H1 from 'components/elements/H1';

function Contact(props) {
  const { ...rest } = props;
  return <H1 {...rest}>contact page</H1>;
}

export default Contact;
