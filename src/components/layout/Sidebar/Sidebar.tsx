/* eslint-disable react/jsx-sort-props */
/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { Flex, FlexProps, List, ListItem, Text } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { __DEV__ } from 'utils';

import packageJSON from '../../../../package.json';
import { Headline } from './components/Headline';
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
}

export const Sidebar = forwardRef<HTMLDivElement, ISidebarProps>(
  (props, ref) => {
    const { isOpen, navigation, ...rest } = props;

    const { t } = useTranslation('common');

    return (
      <Flex
        ref={ref}
        as="aside"
        ml={{ base: isOpen ? 0 : '-280px', lg: 0 }}
        {...rest}
      >
        <Headline />

        <List flex={1} overflowY="scroll">
          {navigation?.map((item) => (
            <ListItem key={nanoid()}>
              <Navigation {...item} />
            </ListItem>
          ))}
        </List>

        <Text
          align="center"
          borderTop="2px"
          borderColor="blackAlpha.100"
          color="primary.700"
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
  bg: 'white',
  borderRight: '2px',
  borderColor: 'blackAlpha.100',
  flexDir: 'column',
  h: '100%',
  isOpen: false,
  overflowY: 'scroll',
  position: { base: 'fixed', lg: 'sticky' },
  top: 0,
  transition: 'margin .5s ease',
  w: 280,
  zIndex: 'popover',
};
