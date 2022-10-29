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
import { useCrudContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { VscWarning } from 'react-icons/vsc';
import { IBaseResource } from 'services';

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
  const { onClose, onDelete } = useCrudContext<IBaseResource>();

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
        onClick={onDelete}
        px={8}
        size="sm"
      >
        {t('button.continue')}
      </Button>
    </BaseModalFooter>
  );
};

export type IDeleteModalProps = ModalBodyProps;

export const DeleteModal: React.FC = (props): JSX.Element => {
  const { isOpen, onClose, resource, type } = useCrudContext<IBaseResource>();

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
            {t('delete.quote', { value: resource?.id || 0 })}
          </Text>
          <Text
            align="center"
            color="blackAlpha.500"
            fontSize="xs"
            fontWeight="medium"
          >
            {t('delete.reminder')}
          </Text>
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
