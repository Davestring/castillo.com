import Bar from 'assets/img/gallery/bar.jpg';
import DiningRoom from 'assets/img/gallery/dining-room.jpg';
import Facade from 'assets/img/gallery/facade.jpg';
import Pool from 'assets/img/gallery/pool.jpg';
import Sauna from 'assets/img/gallery/sauna.jpg';
import { Container, Header } from 'components/layout';
import { AuthContext } from 'contexts';
import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { use100vh } from 'react-div-100vh';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { FaBath, FaBed, FaUserFriends } from 'react-icons/fa';

import { Gallery, GalleryItem } from './components/Gallery';
import { Stats, StatsItem } from './components/Stats';

const GALLERY_ITEMS = [
  { colSpan: 4, maxH: 416, rowSpan: 2, src: Facade },
  { colSpan: 2, maxH: 200, src: Pool },
  { colSpan: 2, maxH: 200, src: Bar },
  { colSpan: 2, maxH: 200, src: Sauna },
  { colSpan: 2, maxH: 200, src: DiningRoom },
];

const STATS_ITEMS = [
  { icon: FaUserFriends, stat: 20 },
  { icon: FaBed, stat: 9 },
  { icon: FaBath, stat: 3.5 },
];

export const Booking = (): JSX.Element => {
  const { access } = useContext(AuthContext);

  const { t } = useTranslation('page:booking');

  const height = use100vh();

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Header isAuthenticated={!!access} isDark position="fixed" withLogo />

      <Container
        as="article"
        bg="bg"
        display="flex"
        flexDir="column"
        isFluid
        minH={height || 0}
        pt={16}
        px={{ base: 0, lg: 6 }}
      >
        <Container
          as="section"
          display="flex"
          flex={1}
          flexDir="column"
          overflowX="hidden"
          px={0}
          py={{ base: 0, lg: 4 }}
        >
          {/* In case of 5XX error render WorkInProgress Layout */}
          {/* <WorkInProgress flex={1} /> */}

          {/* Otherwise render content */}
          <Gallery
            maxH="430px"
            mb={4}
            mobileSrc={Facade}
            onClick={() => {}}
            rounded={{ lg: 'md' }}
          >
            {GALLERY_ITEMS.map((item) => (
              <GalleryItem key={nanoid()} isGrid {...item} />
            ))}
          </Gallery>

          <Stats mb={4} px={{ base: 4, lg: 0 }}>
            {STATS_ITEMS.map((item) => (
              <StatsItem key={nanoid()} {...item} />
            ))}
          </Stats>
        </Container>
      </Container>
    </>
  );
};
