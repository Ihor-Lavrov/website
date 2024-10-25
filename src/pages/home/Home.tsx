import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Tag } from '../../components/tag';
import { getTagsList } from '../../utils/tags';

export const HomePage = () => {
  const tags = getTagsList();

  return (
    <Box>
      <Flex gap={4} align='center'>
        <Text variant='italic'>hey, I'm</Text>
        <Heading>Ihor Lavrov</Heading>
      </Flex>
      <Heading>Software Engineer</Heading>
      <Flex gap='10px' maxW='876px' wrap='wrap' justify='center'>
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title}></Tag>
        ))}
      </Flex>
    </Box>
  );
};
