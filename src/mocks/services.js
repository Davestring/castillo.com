export const TITLE_HELPER = 'Sed ut perspiciatis unde omnis iste natus';

export const CAPTION_HELPER = 'At vero eos et accusamus et iusto';

export const SUMMARY_HELPER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export const SERVICES_DATA = [
  {
    alt: 'house-image',
    image: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/front.jpg`,
    caption: CAPTION_HELPER,
    title: TITLE_HELPER,
    summary: SUMMARY_HELPER,
  },
  {
    alt: 'bar-image',
    image: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/bar.jpg`,
    caption: CAPTION_HELPER,
    title: TITLE_HELPER,
    summary: SUMMARY_HELPER,
    isReverse: true,
  },
  {
    alt: 'pool-image',
    image: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/pool.jpg`,
    caption: CAPTION_HELPER,
    title: TITLE_HELPER,
    summary: SUMMARY_HELPER,
  },
];
