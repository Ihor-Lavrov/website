import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export const HomePage = () => {
  return (
    <Box>
      <Flex gap={4}>
        <Text variant='italic'>hey, I'm</Text>
        <Heading>Ihor Lavrov</Heading>
      </Flex>
      <Heading>Software Engineer</Heading>
    </Box>
  );
};
