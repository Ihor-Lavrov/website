import { createBrowserRouter } from 'react-router-dom';
import { BasicPage } from '../components';
import { HomePage } from '../pages';
import { About } from '../pages/about';
import { NotFoundPage } from '../pages/error/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: (
      <BasicPage>
        <HomePage />
      </BasicPage>
    ),
    errorElement: <NotFoundPage />
  },
  {
    path: '/about',
    element: (
      <BasicPage>
        <About />
      </BasicPage>
    ),
    errorElement: <NotFoundPage />
  },
  {
    path: '/',
    element: (
      <BasicPage>
        <HomePage />
      </BasicPage>
    ),
    errorElement: <NotFoundPage />
  }
]);
