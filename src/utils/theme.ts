import { extendTheme } from '@chakra-ui/react';
import Color from 'color';

export const theme = extendTheme({
  colors: {
    bg: 'rgb(250, 251, 252)',
    primary: {
      100: Color('#101D2C').lighten(6).hex(),
      200: Color('#101D2C').lighten(5).hex(),
      300: Color('#101D2C').lighten(4).hex(),
      400: Color('#101D2C').lighten(3).hex(),
      50: Color('#101D2C').lighten(7).hex(),
      500: Color('#101D2C').lighten(2).hex(),
      600: Color('#101D2C').lighten(1).hex(),
      700: '#101D2C',
      800: Color('#101D2C').darken(0.1).hex(),
      900: Color('#101D2C').darken(0.2).hex(),
    },
  },
});
