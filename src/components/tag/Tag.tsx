import { Tag as ChakraTag, Text } from '@chakra-ui/react';

export interface TagProps {
  title: string;
}
export const Tag = ({ title }: TagProps) => {
  return (
    <ChakraTag>
      <Text>{title}</Text>
    </ChakraTag>
  );
};
