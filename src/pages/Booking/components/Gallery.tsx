import {
  Box,
  Grid,
  GridItem,
  GridItemProps,
  GridProps,
  Image,
  ImageProps,
  theme,
  useMediaQuery,
} from '@chakra-ui/react';
import fp from 'lodash/fp';
import { MouseEventHandler } from 'react';

import { FullGalleryButton } from './FullGalleryButton';

export type IBaseGalleryItemProps = ImageProps &
  Pick<GridItemProps, 'colSpan' | 'rowSpan'>;

export interface IGalleryItemProps extends IBaseGalleryItemProps {
  /**
   * If `true`, it will render a grid container.
   */
  isGrid?: boolean;
}

export const GalleryItem: React.FC<IGalleryItemProps> = (props) => {
  const { colSpan, isGrid, rowSpan, ...rest } = props;

  if (!isGrid) return <Image {...rest} />;

  return (
    <GridItem colSpan={colSpan} rowSpan={rowSpan}>
      <Image {...rest} />
    </GridItem>
  );
};

GalleryItem.defaultProps = {
  alt: 'gallery-item',
  cursor: 'pointer',
  filter: 'brightness(75%)',
  fit: 'cover',
  h: '100%',
  isGrid: false,
  sx: {
    ':hover': {
      filter: 'brightness(50%)',
    },
  },
  transition: '0.5s filter linear',
  w: '100%',
};

export interface IGalleryProps extends Omit<GridProps, 'onClick'> {
  /**
   * Action handler when clicking the full gallery button.
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
  /**
   * Mobile src image.
   */
  mobileSrc?: string;
}

export const Gallery: React.FC<IGalleryProps> = (props) => {
  const { children, onClick, mobileSrc, ...rest } = props;

  const [isLg] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  if (!isLg && !fp.isNil(mobileSrc)) {
    return (
      <Box {...fp.omit(['templateColumns', 'templateRows'])(rest)}>
        <GalleryItem isGrid={!isLg} src={mobileSrc} />
        <FullGalleryButton aria-label="full-gallery" onClick={onClick} />
      </Box>
    );
  }

  return (
    <Grid {...rest}>
      {children}
      <FullGalleryButton aria-label="full-gallery" onClick={onClick} />
    </Grid>
  );
};

Gallery.defaultProps = {
  gap: 4,
  overflow: 'hidden',
  position: 'relative',
  templateColumns: 'repeat(8, 1fr)',
  templateRows: 'repeat(2, 1fr)',
};
