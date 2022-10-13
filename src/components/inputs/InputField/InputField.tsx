import {
  FormControl,
  FormControlProps,
  Input,
  InputProps,
} from '@chakra-ui/react';
import {
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IFormLabelProps,
} from 'components/lib';
import { useField } from 'formik';
import { forwardRef } from 'react';
import { __DEV__ } from 'utils';

export interface IInputFieldProps extends FormControlProps {
  /**
   * Input helper text that will be displayed below the input.
   */
  helper?: string;
  /**
   * Custom input properties.
   */
  inputProps?: InputProps;
  /**
   * Input label, can be a raw text or an i18n key.
   */
  label?: string;
  /**
   * Label custom properties.
   */
  labelProps?: IFormLabelProps;
  /**
   * Input name that Formik will use to identify the input on the HTML code.
   */
  name: string;
  /**
   * Input placeholder, can be a raw text or an i18n key.
   */
  placeholder?: string;
  /**
   * Input type, can be `email`, `password`, etc.
   */
  type?: string;
}

export const InputField = forwardRef<HTMLInputElement, IInputFieldProps>(
  (props, ref): JSX.Element => {
    const {
      helper,
      inputProps,
      label,
      labelProps,
      name,
      placeholder,
      size,
      type,
      ...rest
    } = props;

    const [field, meta] = useField(name);

    const isInvalid = !!meta.error && !!meta.touched;

    return (
      <FormControl isInvalid={isInvalid} name={name} {...rest}>
        <FormLabel fontSize={size} htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
        <Input
          ref={ref}
          placeholder={placeholder}
          size={size}
          type={type}
          {...inputProps}
          {...field}
        />
        <FormHelperText>{helper}</FormHelperText>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  },
);

if (__DEV__) {
  InputField.displayName = 'InputField';
}

InputField.defaultProps = {
  helper: undefined,
  inputProps: { bg: '#F6F7FA' },
  label: undefined,
  labelProps: {},
  placeholder: undefined,
  size: 'sm',
  type: 'text',
};
