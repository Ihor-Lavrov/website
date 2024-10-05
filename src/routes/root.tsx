import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages';
import { NotFoundPage } from '../pages/error/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/'
  }
]);
