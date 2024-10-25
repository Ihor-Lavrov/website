import { Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { headerMenuList } from '../../const/headerMenuRoutes';

export const Header = () => {
  return (
    <Flex as='nav' justifyContent='flex-end'>
      <Flex gap={4}>
        {headerMenuList.map((menuItem) => (
          <RouterLink key={menuItem.path} id={menuItem.path} to={menuItem.path}>
            {menuItem.title}
          </RouterLink>
        ))}
      </Flex>
    </Flex>
  );
};
