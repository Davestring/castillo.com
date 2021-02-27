import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import fontWeights from './fontWeights';
import fonts from './fonts';

const theme = extendTheme({ colors, fonts, fontWeights });

export default theme;
