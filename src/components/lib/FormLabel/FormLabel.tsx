import { FormLabel as FL, FormLabelProps } from '@chakra-ui/react';
import fp from 'lodash/fp';

export type IFormLabelProps = FormLabelProps;

export const FormLabel: React.FC<IFormLabelProps> = (
  props,
): JSX.Element | null => {
  const { children, htmlFor, size, ...rest } = props;

  if (fp.isEmpty(children) || fp.isNil(children)) return null;

  return (
    <FL fontSize={size || 'md'} htmlFor={htmlFor} {...rest}>
      {children}
    </FL>
  );
};

FormLabel.defaultProps = {
  color: '#101D2C',
  fontWeight: 'medium',
};
