import { Heading, HeadingProps } from '@chakra-ui/react';

export type IH1Props = HeadingProps;

export const H1: React.FC<IH1Props> = (props) => {
  const { children, ...rest } = props;

  return (
    <Heading as="h1" {...rest}>
      {children}
    </Heading>
  );
};

H1.defaultProps = {
  fontSize: { '2xl': '6xl', base: '3xl', md: '5xl' },
  fontWeight: 'thin',
  letterSpacing: '10px',
  textTransform: 'uppercase',
  transition: 'font-size .5s ease',
};
