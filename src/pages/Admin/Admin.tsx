import 'react-toastify/dist/ReactToastify.css';

import { Box, Flex, Stack } from '@chakra-ui/react';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { Overlay } from 'components/elements';
import { Header, Sidebar } from 'components/layout';
import { AuthContext } from 'contexts';
import { useSidebar, useToggle } from 'hooks';
import fp from 'lodash/fp';
import { useContext, useEffect, useRef } from 'react';
import { use100vh } from 'react-div-100vh';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navigate, Outlet } from 'react-router-dom';

export const Admin = (): JSX.Element | null => {
  const { access, isLoading } = useContext(AuthContext);

  const { t } = useTranslation('page:admin');

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

  if (isLoading) return null;

  if (fp.isNil(access)) return <Navigate replace to="/login" />;

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Flex
        ref={contentRef}
        as="main"
        bg="bg"
        h={height || 0}
        overflowX="hidden"
        position="relative"
      >
        <Sidebar ref={sidebarRef} isOpen={isOpen} top={0} />

        <Overlay isVisible={isOpen} />

        <Stack flex={1} h="100%">
          <Header
            isAuthenticated
            onClick={() => toggle()}
            position="sticky"
            top={0}
          />

          <Box as="section" flex={1} mt="0 !important" overflowY="scroll" p={8}>
            <Outlet />
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
