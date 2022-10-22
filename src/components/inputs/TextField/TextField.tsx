import {
  FormControl,
  FormControlProps,
  Textarea,
  TextareaProps,
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

export interface ITextFieldProps extends FormControlProps {
  /**
   * Field helper text that will be displayed below the textarea.
   */
  helper?: string;
  /**
   * Custom field properties.
   */
  textareaProps?: TextareaProps;
  /**
   * Field label, can be a raw text or an i18n key.
   */
  label?: string;
  /**
   * Label custom properties.
   */
  labelProps?: IFormLabelProps;
  /**
   * Field name that Formik will use to identify the textarea on the HTML code.
   */
  name: string;
  /**
   * Field placeholder, can be a raw text or an i18n key.
   */
  placeholder?: string;
}

export const TextField = forwardRef<HTMLTextAreaElement, ITextFieldProps>(
  (props, ref): JSX.Element => {
    const {
      helper,
      label,
      labelProps,
      name,
      placeholder,
      size,
      textareaProps,
      ...rest
    } = props;

    const [field, meta] = useField(name);

    const isInvalid = !!meta.error && !!meta.touched;

    return (
      <FormControl isInvalid={isInvalid} name={name} {...rest}>
        <FormLabel fontSize={size} htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
        <Textarea
          ref={ref}
          placeholder={placeholder}
          size={size}
          {...textareaProps}
          {...field}
        />
        <FormHelperText>{helper}</FormHelperText>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  },
);

if (__DEV__) {
  TextField.displayName = 'TextField';
}

TextField.defaultProps = {
  helper: undefined,
  label: undefined,
  labelProps: {},
  placeholder: undefined,
  size: 'sm',
  textareaProps: { bg: 'bg' },
};
