import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';
import { textStyles } from './components';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const customTheme = {
  config,
  colors: {
    brand: {
      bg: 'red.500'
    }
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('blue.800', 'black.800')(props),
        bg: mode('black', 'white')(props)
      }
    })
  },
  components: {
    Text: textStyles
  }
};

export default extendTheme(customTheme);
