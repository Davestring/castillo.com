import { Flex, Stack } from '@chakra-ui/react';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { Overlay } from 'components/elements';
import { Header, Sidebar } from 'components/layout';
import { AuthContext } from 'contexts';
import { useFetchMe, useSidebar, useToggle } from 'hooks';
import fp from 'lodash/fp';
import { useContext, useEffect, useRef } from 'react';
import { use100vh } from 'react-div-100vh';
import { Navigate, Outlet } from 'react-router-dom';

import { SIDE_NAVIGATION } from './helpers';

export const Admin = (): JSX.Element | null => {
  const { access, isLoading, logoutFn } = useContext(AuthContext);

  const { data: me, isLoading: isLoadingMe } = useFetchMe();

  const [isOpen, toggle] = useToggle(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const height = use100vh();

  useSidebar(sidebarRef, isOpen, toggle);

  useEffect(() => {
    if (contentRef?.current && isOpen) {
      disableBodyScroll(contentRef?.current);
    }
    if (contentRef?.current && !isOpen) {
      enableBodyScroll(contentRef?.current);
    }
    return () => clearAllBodyScrollLocks();
  }, [contentRef, isOpen]);

  if (isLoading || isLoadingMe) return null;

  if (fp.isNil(access)) return <Navigate replace to="/login" />;

  return (
    <Flex
      ref={contentRef}
      as="main"
      bg="bg"
      h={height || 0}
      overflow="hidden"
      position="relative"
    >
      <Sidebar
        ref={sidebarRef}
        isOpen={isOpen}
        navigation={SIDE_NAVIGATION}
        onLogout={logoutFn}
        top={0}
        user={me}
      />

      <Overlay isVisible={isOpen} />

      <Stack flex={1} overflow="hidden">
        <Header isAuthenticated onClick={() => toggle()} />

        <Stack
          as="section"
          flex={1}
          mt="0 !important"
          overflow="hidden"
          px={{ base: 4, lg: 6 }}
          py={6}
        >
          <Outlet />
        </Stack>
      </Stack>
    </Flex>
  );
};
