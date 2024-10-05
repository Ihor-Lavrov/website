import { ComponentStyleConfig } from '@chakra-ui/react';

export const textStyles: ComponentStyleConfig = {
  baseStyle: {
    fontSize: '64px'
  },
  variants: {
    italic: {
      color: 'purple',
      fontSize: '32px',
      fontStyle: 'italic'
    }
  }
};
