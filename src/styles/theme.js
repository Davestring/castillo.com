import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import fonts from './fonts';
import fontWeights from './fontWeights';

const theme = extendTheme({ colors, fonts, fontWeights });

export default theme;
