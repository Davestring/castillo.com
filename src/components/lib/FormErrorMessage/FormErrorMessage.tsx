import {
  FormErrorMessage as FEM,
  FormErrorMessageProps,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import fp from 'lodash/fp';
import { useTranslation } from 'react-i18next';
import { AiFillWarning } from 'react-icons/ai';

export type IFormErrorMessageProps = FormErrorMessageProps;

export const FormErrorMessage: React.FC<IFormErrorMessageProps> = (
  props,
): JSX.Element | null => {
  const { children, ...rest } = props;

  const { t } = useTranslation('errors');

  if (fp.isEmpty(children) || fp.isNil(children)) return null;

  return (
    <FEM {...rest}>
      <Stack align="start" isInline justify="center">
        <Icon as={AiFillWarning} boxSize={4} color="red" />
        <Text align="start" as="span">
          {t(children as string)}
        </Text>
      </Stack>
    </FEM>
  );
};

FormErrorMessage.defaultProps = {
  color: 'blackAlpha.500',
  fontSize: 'xs',
  fontWeight: 'semibold',
};
