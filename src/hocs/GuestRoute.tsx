import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { RoleRouteProps } from './HocsTypes';

const GuestRoute: FC<RoleRouteProps> = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (auth?.user) {
    return <Navigate to='/profile' state={{ from: location }} />;
  }

  return children;
};

export { GuestRoute };
