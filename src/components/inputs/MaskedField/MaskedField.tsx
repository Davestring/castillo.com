import {
  FormControl,
  FormControlProps,
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';
import {
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  IFormLabelProps,
} from 'components/lib';
import { useField } from 'formik';
import fp from 'lodash/fp';
import { forwardRef, useCallback } from 'react';
import { PatternFormat } from 'react-number-format';
import { __DEV__ } from 'utils';

export enum MaskedFieldSizeEnum {
  sm = '32px',
  md = '40px',
  lg = '48px',
}

export interface IMaskedFieldProps extends FormControlProps {
  /**
   * Mask used by the field in order to transform the input.
   */
  format: string;
  /**
   * Field helper text that will be displayed below the input.
   */
  helper?: string;
  /**
   * Custom input properties.
   */
  inputProps?: InputProps;
  /**
   * Field label, can be a raw text or an i18n key.
   */
  label?: string;
  /**
   * Label custom properties.
   */
  labelProps?: IFormLabelProps;
  /**
   * Field name that Formik will use to identify the input on the HTML code.
   */
  name: string;
  /**
   * Field placeholder, can be a raw text or an i18n key.
   */
  placeholder?: string;
}

export const MaskedField = forwardRef<HTMLInputElement, IMaskedFieldProps>(
  (props, ref): JSX.Element => {
    const {
      format,
      helper,
      inputProps,
      label,
      labelProps,
      name,
      placeholder,
      size,
      ...rest
    } = props;

    const [field, meta, helpers] = useField(name);

    const isInvalid = !!meta.error && !!meta.touched;

    const setTouchedInput = useCallback(() => {
      if (!meta.touched) helpers.setTouched(true);
    }, [meta?.touched, helpers?.setTouched]);

    return (
      <FormControl isInvalid={isInvalid} name={name} {...rest}>
        <FormLabel fontSize={size} htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
        <InputGroup ref={ref}>
          <PatternFormat
            allowNegative={false}
            customInput={Input}
            format={format}
            onBlur={setTouchedInput}
            onValueChange={({ formattedValue }) => {
              helpers.setValue(formattedValue);
            }}
            placeholder={!fp.isNil(placeholder) ? placeholder : undefined}
            style={{
              ...inputProps,
              height: MaskedFieldSizeEnum[size as unknown as string],
            }}
            value={field.value}
          />
        </InputGroup>
        <FormHelperText>{helper}</FormHelperText>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  },
);

if (__DEV__) {
  MaskedField.displayName = 'MaskedField';
}

MaskedField.defaultProps = {
  helper: undefined,
  inputProps: { background: 'bg' },
  label: undefined,
  labelProps: {},
  placeholder: undefined,
  size: 'sm',
};
