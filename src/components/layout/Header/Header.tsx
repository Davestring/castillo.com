import { Box, BoxProps, Button, Image, Link, Spinner } from '@chakra-ui/react';
import Logo from 'assets/img/logo.light.png';
import Color from 'color';
import { useTranslation } from 'react-i18next';
import { Link as ReachLink, useNavigate } from 'react-router-dom';

import { Container } from '../Container';

export type IHeaderProps = BoxProps;

export const Header: React.FC<IHeaderProps> = (props): JSX.Element => {
  const { t } = useTranslation('common');

  const navigate = useNavigate();

  return (
    <Box as="header" {...props}>
      <Container
        alignItems="center"
        as="nav"
        display="flex"
        h="100%"
        justifyContent="space-between"
      >
        <Link as={ReachLink} to="/">
          <Image
            alt="casa-castillo"
            fallback={<Spinner />}
            fit="cover"
            src={Logo}
            sx={{ '&:hover': { cursor: 'pointer' } }}
            w={160}
          />
        </Link>

        <Button
          colorScheme="gray"
          onClick={() => navigate('/login')}
          p={4}
          size="xs"
        >
          {t('button.login')}
        </Button>
      </Container>
    </Box>
  );
};

Header.defaultProps = {
  bg: Color('#101D2C').lighten(0.625).hex(),
  h: 16,
  w: '100%',
  zIndex: 'banner',
};
