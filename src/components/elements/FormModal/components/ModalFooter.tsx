import {
  Button,
  ModalFooter as Base,
  ModalFooterProps,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export interface IModalFooterProps extends ModalFooterProps {
  /**
   * Form unique identifier.
   */
  formId: string;
  /**
   * If `true`, it means that the form is not valid or it has being submitted.
   */
  isDisabled: boolean;
  /**
   * If `true`, it means that the form has been submitted.
   */
  isSubmitting: boolean;
  /**
   * Action triggered on close events.
   */
  onClose: VoidFunction;
}

export const ModalFooter: React.FC<IModalFooterProps> = (
  props,
): JSX.Element => {
  const { formId, isDisabled, isSubmitting, onClose, ...rest } = props;

  const { t } = useTranslation('common');

  return (
    <Base {...rest}>
      <Button
        colorScheme="blackAlpha"
        isDisabled={isSubmitting}
        mr={4}
        onClick={onClose}
        px={8}
        size="sm"
      >
        {t('button.cancel')}
      </Button>
      <Button
        bg="primary.700"
        colorScheme="primary"
        form={formId}
        isDisabled={isDisabled}
        isLoading={isSubmitting}
        px={8}
        size="sm"
        type="submit"
      >
        {t('button.submit')}
      </Button>
    </Base>
  );
};

ModalFooter.defaultProps = {
  borderTop: '2px',
  // eslint-disable-next-line sort-keys-fix/sort-keys-fix, sort-keys
  borderColor: 'blackAlpha.100',
};
