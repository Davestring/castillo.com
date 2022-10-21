import {
  Box,
  BoxProps,
  Button,
  IconButton,
  Image,
  Link,
  Spinner,
} from '@chakra-ui/react';
import LogoDark from 'assets/img/logo.dark.png';
import LogoLight from 'assets/img/logo.light.png';
import { BurgerButton } from 'components/elements';
import { AuthContext } from 'contexts';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FiLogOut } from 'react-icons/fi';
import { Link as ReachLink, useNavigate } from 'react-router-dom';

import { Container } from '../Container';

export interface IHeaderProps extends BoxProps {
  /**
   * If `true`, it will render the user menu instead of the login button.
   */
  isAuthenticated?: boolean;
  /**
   * If `true`, the sidebar will have a dark background color otherwise the
   * background color will be white.
   */
  isDark?: boolean;
  /**
   * If `true`, the app logo will be displayed on the left side of the sidebar.
   */
  withLogo?: boolean;
}

export const Header: React.FC<IHeaderProps> = (props): JSX.Element => {
  const { isAuthenticated, isDark, onClick, withLogo, ...rest } = props;

  const { logoutFn } = useContext(AuthContext);

  const { t } = useTranslation('common');

  const navigate = useNavigate();

  return (
    <Box
      as="header"
      bg={isDark ? 'primary.700' : { base: 'primary.700', lg: 'white' }}
      {...rest}
    >
      <Container
        alignItems="center"
        as="nav"
        display="flex"
        h="100%"
        justifyContent={{
          base: 'flex-end',
          lg: withLogo ? 'space-between' : 'flex-end',
        }}
        position="relative"
      >
        {withLogo ? (
          <Link
            as={ReachLink}
            left="50%"
            position={{ base: 'absolute', lg: 'static' }}
            to="/"
            top="50%"
            transform={{ base: 'translate(-50%, -50%)', lg: 'translate(0, 0)' }}
          >
            <Image
              alt="casa-castillo"
              fallback={<Spinner />}
              fit="cover"
              src={isDark ? LogoLight : LogoDark}
              sx={{ '&:hover': { cursor: 'pointer' } }}
              w={160}
            />
          </Link>
        ) : null}

        <BurgerButton
          color={isDark ? 'white' : { base: 'white', lg: 'primary.700' }}
          display={{ base: 'block', lg: 'none' }}
          onClick={onClick}
        />

        {!isAuthenticated ? (
          <Button
            bg="bg"
            color="primary.700"
            display={{ base: 'none', lg: 'inherit' }}
            onClick={() => navigate('/login')}
            px={6}
            py={4}
            rounded="full"
            size="xs"
          >
            {t('button.login')}
          </Button>
        ) : (
          <IconButton
            _hover={{ transform: 'scale(1.05)' }}
            aria-label="logout"
            display={{ base: 'none', lg: 'inherit' }}
            icon={<FiLogOut color={isDark ? 'white' : '#101D2C'} />}
            onClick={logoutFn}
            size="lg"
            variant="link"
          />
        )}
      </Container>
    </Box>
  );
};

Header.defaultProps = {
  borderBottom: '2px',
  borderColor: 'blackAlpha.100',
  h: '100%',
  isAuthenticated: false,
  isDark: false,
  maxH: 16,
  minH: 16,
  w: '100%',
  withLogo: false,
  zIndex: 'banner',
};
