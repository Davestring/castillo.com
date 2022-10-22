import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import { AnyObjectSchema } from 'yup';

import { ModalFooter } from './components/ModalFooter';
import { ModalHeader } from './components/ModalHeader';

export interface IFormModalProps<T> extends ModalProps {
  /**
   * Form unique identifier.
   */
  formId?: string;
  /**
   * Form initial values.
   */
  initialValues: Partial<T>;
  /**
   * On submit action handler.
   */
  onSubmit: (v: Partial<T>, h?: FormikHelpers<Partial<T>>) => Promise<void>;
  /**
   * Form validation schema.
   */
  validationSchema: AnyObjectSchema;
}

export const FormModal = <T,>(props: IFormModalProps<T>): JSX.Element => {
  const {
    children,
    formId = 'modal-form',
    initialValues,
    onClose,
    onSubmit,
    validationSchema,
    ...rest
  } = props;

  const { handleReset, handleSubmit, ...formik } = useFormik<Partial<T>>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Modal onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody bg="bg">
          <FormikProvider value={{ handleReset, handleSubmit, ...formik }}>
            <form id={formId} onReset={handleReset} onSubmit={handleSubmit}>
              {children}
            </form>
          </FormikProvider>
        </ModalBody>
        <ModalFooter
          formId={formId}
          isDisabled={!formik.isValid || formik.isSubmitting}
          isSubmitting={formik.isSubmitting}
          onClose={onClose}
        />
      </ModalContent>
    </Modal>
  );
};

FormModal.defaultProps = {
  formId: 'modal-form',
  isCentered: true,
  size: { base: 'xs', lg: 'lg', md: 'md', sm: 'sm' },
};
