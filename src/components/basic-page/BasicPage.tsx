import { Box } from '@chakra-ui/react';

export interface BasicPageProps {
  children: React.ReactNode;
}

export const BasicPage = ({ children }: BasicPageProps) => {
  return (
    <Box w='100%' h='100%'>
      {children}
    </Box>
  );
};
