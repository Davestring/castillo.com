import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalFooter as BaseModalFooter,
  ModalFooterProps,
  ModalHeader as BaseModalHeader,
  ModalHeaderProps,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { InputField } from 'components/inputs';
import { useCrudContext } from 'contexts';
import { Form, FormikProvider, useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { VscWarning } from 'react-icons/vsc';
import { IBaseResource, IDeletePayload } from 'services';
import * as Yup from 'yup';

const DEFAULT_VALUES = { current_password: '' };

const ValidationSchema = Yup.object().shape({
  current_password: Yup.string()
    .min(8, 'form.generic.min-length')
    .required('form.generic.required'),
});

type IModalHeaderProps = ModalHeaderProps;

const ModalHeader: React.FC<IModalHeaderProps> = (props): JSX.Element => {
  const { t } = useTranslation('common');

  return <BaseModalHeader {...props}>{t('delete.title')}</BaseModalHeader>;
};

ModalHeader.defaultProps = {
  borderBottom: '2px',
  borderColor: 'blackAlpha.100',
  color: 'primary.700',
};

type IModalFooterProps = ModalFooterProps;

const ModalFooter: React.FC<IModalFooterProps> = (props): JSX.Element => {
  const { isProtected, onClose, onDelete } = useCrudContext<IBaseResource>();

  const { t } = useTranslation('common');

  return (
    <BaseModalFooter {...props}>
      <Button
        colorScheme="blackAlpha"
        mr={4}
        onClick={onClose}
        px={8}
        size="sm"
      >
        {t('button.cancel')}
      </Button>
      <Button
        bg="red.700"
        colorScheme="red"
        px={8}
        size="sm"
        {...{
          form: isProtected ? 'delete' : undefined,
          onClick: isProtected ? undefined : () => onDelete(),
          type: isProtected ? 'submit' : 'button',
        }}
      >
        {t('button.continue')}
      </Button>
    </BaseModalFooter>
  );
};

export type IDeleteModalProps = ModalBodyProps;

export const DeleteModal: React.FC<IDeleteModalProps> = (
  props,
): JSX.Element => {
  const { isOpen, isProtected, onClose, registry, onDelete, type } =
    useCrudContext<IBaseResource>();

  const { handleReset, handleSubmit, ...formik } = useFormik<IDeletePayload>({
    enableReinitialize: true,
    initialValues: DEFAULT_VALUES,
    onSubmit: onDelete,
    validationSchema: ValidationSchema,
  });

  const { t } = useTranslation('common');

  return (
    <Modal
      isCentered
      isOpen={isOpen && type === 'delete'}
      onClose={onClose}
      size={{ base: 'full', md: 'xl' }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton top={4} />
        <ModalBody {...props}>
          <Icon as={VscWarning} boxSize={24} color="red.700" />

          <Text align="center" fontSize="sm" fontWeight="bold">
            {t('delete.quote', { value: registry?.id || 0 })}
          </Text>

          <Text
            align="center"
            color="blackAlpha.500"
            fontSize="xs"
            fontWeight="medium"
          >
            {t('delete.reminder')}
          </Text>

          {isProtected ? (
            <FormikProvider value={{ handleReset, handleSubmit, ...formik }}>
              <Form id="delete" onReset={handleReset} onSubmit={handleSubmit}>
                <InputField
                  helper={t('password.helper')}
                  inputProps={{ bg: 'white', rounded: 'full' }}
                  mt={4}
                  name="current_password"
                  placeholder={t('password')}
                  size="md"
                  type="password"
                  w={320}
                />
              </Form>
            </FormikProvider>
          ) : null}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

DeleteModal.defaultProps = {
  alignItems: 'center',
  bg: 'bg',
  display: 'flex',
  flexDir: 'column',
  gap: 2,
  justifyContent: 'center',
  p: 6,
};
