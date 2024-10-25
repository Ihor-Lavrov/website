import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/root';
import customTheme from './theme/theme';

export const App = () => {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
