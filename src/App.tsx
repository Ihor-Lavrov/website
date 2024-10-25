import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { BasicPage } from './components';
import { router } from './routes/root';
import customTheme from './theme/theme';

export const App = () => {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <BasicPage>
          <RouterProvider router={router}></RouterProvider>
        </BasicPage>
      </ChakraProvider>
    </>
  );
};

export default App;
