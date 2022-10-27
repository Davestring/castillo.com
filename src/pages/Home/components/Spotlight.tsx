import { Box, Image, ImageProps } from '@chakra-ui/react';
import Bar from 'assets/img/spotlight/bar.jpg';
import Facade from 'assets/img/spotlight/facade.jpg';
import Pool from 'assets/img/spotlight/pool.jpg';
import { Divider } from 'components/elements';
import { ITapestryIconProps, TapestryIcon } from 'components/icons';
import { Container, IContainerProps } from 'components/layout';
import { H1, H2 } from 'components/typography';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

const TAPESTRIES: ITapestryIconProps[] = [{ right: '-50%' }, { right: '50%' }];

const COVERS: ImageProps[] = [
  {
    h: { base: '30%', xl: '45%' },
    left: { base: '5%', md: '15%', xl: '45%' },
    src: Pool,
    top: { base: '25%', xl: '15%' },
  },
  {
    h: { base: '40%', xl: '45%' },
    left: { base: '27.5%', md: '32.5%', xl: '60%' },
    src: Bar,
    top: { base: '20%', xl: '27.5%' },
  },
  {
    h: { base: '50%', xl: '45%' },
    left: { base: '50%', md: '50%', xl: '75%' },
    src: Facade,
    top: { base: '15%', xl: '40%' },
  },
];

export type ISpotlightProps = IContainerProps;

export const Spotlight: React.FC<ISpotlightProps> = (props): JSX.Element => {
  const { t } = useTranslation('page:home');

  return (
    <Container as="section" role="main" {...props}>
      {TAPESTRIES?.map((item) => (
        <TapestryIcon
          key={nanoid()}
          color="primary.900"
          height="100%"
          position="absolute"
          top={0}
          width="100%"
          {...item}
        />
      ))}

      {COVERS?.map((item) => (
        <Image
          key={nanoid()}
          border="2px"
          borderColor="white"
          fit="cover"
          position="absolute"
          rounded="md"
          transition="all .5s ease"
          w={{ base: '45%', md: '35%', xl: '18%' }}
          {...item}
        />
      ))}

      <Box
        left="50%"
        position="absolute"
        px={4}
        top={{ base: '82%', md: '85%' }}
        transform="translate(-50%, -50%)"
        w="100%"
      >
        <H1 color="white" mb={4} textAlign="center">
          {t('spotlight.title')}
        </H1>

        <Divider bg="white" mb={4} />

        <H2 color="white" textAlign="center">
          {t('slogan', { ns: 'common' })}
        </H2>
      </Box>
    </Container>
  );
};

Spotlight.defaultProps = {
  bg: 'primary.700',
  is100vh: true,
  isFluid: true,
};
