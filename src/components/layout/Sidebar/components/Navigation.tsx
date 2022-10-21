import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ReachLink, useLocation } from 'react-router-dom';

import { INavigationItem } from '../Sidebar.types';

export type INavigationProps = LinkProps & INavigationItem;

export const Navigation: React.FC<INavigationProps> = (props): JSX.Element => {
  const { icon, label, to, ...rest } = props;

  const { t } = useTranslation('common');

  const location = useLocation();

  const isSelected = useMemo(() => location?.pathname === to, [location, to]);

  return (
    <Link
      as={ReachLink}
      bg={isSelected ? 'primary.600' : 'primary.700'}
      borderRight={isSelected ? '4px' : '0px'}
      to={to}
      {...rest}
    >
      <Icon as={icon} boxSize={4} color="bg" />
      <Text color="bg" fontSize="sm" fontWeight="semibold">
        {t(label)}
      </Text>
    </Link>
  );
};

Navigation.defaultProps = {
  _hover: { bg: 'primary.600', transition: 'background .5s ease' },
  alignItems: 'center',
  borderColor: 'bg',
  display: 'flex',
  gap: 2,
  px: 6,
  py: 4,
  transition: 'background .5s ease',
};
