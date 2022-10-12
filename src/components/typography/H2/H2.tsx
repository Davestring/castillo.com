import { Heading, HeadingProps } from '@chakra-ui/react';

export type IH2Props = HeadingProps;

export const H2: React.FC<IH2Props> = (props) => {
  const { children, ...rest } = props;

  return (
    <Heading as="h2" {...rest}>
      {children}
    </Heading>
  );
};

H2.defaultProps = {
  fontSize: { '2xl': 'lg', base: 'xs', md: 'sm' },
  fontWeight: 'thin',
  letterSpacing: '5px',
  lineHeight: 'taller',
  textTransform: 'uppercase',
  transition: 'font-size .5s ease',
};
