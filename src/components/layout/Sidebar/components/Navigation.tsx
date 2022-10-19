import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as ReachLink, useLocation } from 'react-router-dom';

import { INavigationItem } from '../Sidebar.types';

export type INavigationProps = LinkProps & INavigationItem;

export const Navigation: React.FC<INavigationProps> = (props): JSX.Element => {
  const { icon, label, to, ...rest } = props;

  const { t } = useTranslation('common');

  const location = useLocation();

  return (
    <Link
      as={ReachLink}
      bg={location?.pathname === to ? 'bg' : 'white'}
      to={to}
      {...rest}
    >
      <Icon as={icon} boxSize={4} color="primary.700" />
      <Text color="primary.700" fontSize="sm" fontWeight="semibold">
        {t(label)}
      </Text>
    </Link>
  );
};

Navigation.defaultProps = {
  _hover: { bg: 'bg', transition: 'background .5s ease' },
  alignItems: 'center',
  display: 'flex',
  gap: 2,
  px: 6,
  py: 4,
  transition: 'background .5s ease',
};
