import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';
import { headingStyles, tagStyles, textStyles } from './components';
import { typography } from './typography';

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
  ...typography,

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('white', 'black')(props),
        bg: mode('black', 'white')(props)
      }
    })
  },
  components: {
    Text: textStyles,
    Heading: headingStyles,
    Tag: tagStyles
  }
};

export default extendTheme(customTheme);
