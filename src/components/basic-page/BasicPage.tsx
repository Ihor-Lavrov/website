import { Box } from '@chakra-ui/react';
import { Header } from '../header';

export interface BasicPageProps {
  children: React.ReactNode;
}

export const BasicPage = ({ children }: BasicPageProps) => {
  return (
    <Box w='100%' h='100%'>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};
