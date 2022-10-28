import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FormikHelpers, FormikProvider, useFormik } from 'formik';
import { useCallback } from 'react';
import { AnyObjectSchema } from 'yup';

import { ModalFooter } from './components/ModalFooter';
import { ModalHeader } from './components/ModalHeader';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

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
  onSubmit: (v: Partial<T>, h?: FormikHelpers<Partial<T>>) => void;
  /**
   * Headline title.
   */
  title: string;
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
    title,
    validationSchema,
    ...rest
  } = props;

  const { handleReset, handleSubmit, ...formik } = useFormik<Partial<T>>({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleOnClose = useCallback(() => {
    formik?.resetForm();
    onClose();
  }, [formik, onClose]);

  return (
    <Modal onClose={handleOnClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader title={title} />
        <ModalCloseButton top={4} />
        <ModalBody bg="bg" display="flex" flexDir="column" p={6}>
          <FormikProvider value={{ handleReset, handleSubmit, ...formik }}>
            <Form id={formId} onReset={handleReset} onSubmit={handleSubmit}>
              {children}
            </Form>
          </FormikProvider>
        </ModalBody>
        <ModalFooter
          formId={formId}
          isDisabled={!formik.isValid || formik.isSubmitting}
          isSubmitting={formik.isSubmitting}
          onClose={handleOnClose}
        />
      </ModalContent>
    </Modal>
  );
};

FormModal.defaultProps = {
  formId: 'modal-form',
  isCentered: true,
  size: { base: 'full', md: 'xl' },
};
