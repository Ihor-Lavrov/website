import { useRouteError } from 'react-router-dom';

export const NotFoundPage = () => {
  const error = useRouteError();
  console.error(error);

  return <div>Error!</div>;
};
