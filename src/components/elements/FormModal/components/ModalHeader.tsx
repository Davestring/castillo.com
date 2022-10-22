import { ModalHeader as Base, ModalHeaderProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export type IModalHeaderProps = ModalHeaderProps;

export const ModalHeader: React.FC<IModalHeaderProps> = (
  props,
): JSX.Element => {
  const { t } = useTranslation('common');

  return <Base {...props}>{t('modal.add-registry')}</Base>;
};

ModalHeader.defaultProps = {
  borderBottom: '2px',
  borderColor: 'blackAlpha.100',
  color: 'primary.700',
};
