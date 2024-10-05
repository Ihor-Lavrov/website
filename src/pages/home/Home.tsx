import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      Home Page
      <Outlet />
    </div>
  );
};
