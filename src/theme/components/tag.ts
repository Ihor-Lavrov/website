import { ComponentStyleConfig } from '@chakra-ui/react';

export const tagStyles: ComponentStyleConfig = {
  baseStyle: {
    container: {
      background: 'transparent',
      color: 'white',
      border: '1px',
      padding: '0.5rem 1rem',
      textTransform: 'uppercase',
      borderRadius: 16
    },
    label: {
      fontSize: '22px',
      fontWeight: 700
    }
  }
};
