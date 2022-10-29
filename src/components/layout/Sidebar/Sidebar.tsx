/* eslint-disable react/jsx-sort-props */
/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Flex, FlexProps, List, ListItem, Text } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { IUserResource } from 'services/resources';
import { __DEV__ } from 'utils';

import packageJSON from '../../../../package.json';
import { Headline } from './components/Headline';
import { Logout } from './components/Logout';
import { Navigation } from './components/Navigation';
import { INavigationItem } from './Sidebar.types';

export interface ISidebarProps extends FlexProps {
  /**
   * If `true`, the sidebar will be displayed on screen.
   */
  isOpen?: boolean;
  /**
   * Sidebar navigation items.
   */
  navigation: INavigationItem[];
  /**
   * Action that will be triggered on logout events.
   */
  onLogout?: VoidFunction;
  /**
   * Authenticated user.
   */
  user?: IUserResource | null;
}

export const Sidebar = forwardRef<HTMLDivElement, ISidebarProps>(
  (props, ref) => {
    const { isOpen, navigation, onLogout, user, ...rest } = props;

    const { t } = useTranslation('common');

    return (
      <Flex
        ref={ref}
        as="aside"
        ml={{ base: isOpen ? 0 : '-280px', lg: 0 }}
        {...rest}
      >
        <Headline user={user} />

        <List flex={1} overflowY="scroll">
          {navigation?.map((item) => (
            <ListItem key={nanoid()}>
              <Navigation {...item} />
            </ListItem>
          ))}
          <ListItem display={{ lg: 'none' }}>
            <Logout onClick={onLogout} />
          </ListItem>
        </List>

        <Text
          align="center"
          borderTop="2px"
          borderColor="primary.900"
          color="bg"
          fontSize="xs"
          fontWeight="bold"
          py={4}
        >
          {t('version', { value: packageJSON?.version })}
        </Text>
      </Flex>
    );
  },
);

if (__DEV__) {
  Sidebar.displayName = 'Sidebar';
}

Sidebar.defaultProps = {
  bg: 'primary.700',
  borderRight: '2px',
  borderColor: 'primary.900',
  flexDir: 'column',
  h: '100%',
  isOpen: false,
  maxW: 280,
  minW: 280,
  onLogout: () => {},
  overflowY: 'scroll',
  position: { base: 'fixed', lg: 'sticky' },
  shadow: 'md',
  top: 0,
  transition: 'margin .5s ease',
  user: null,
  zIndex: 'popover',
};
