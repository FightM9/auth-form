import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { RoleRouteProps } from './HocsTypes';

const PrivateRoute: FC<RoleRouteProps> = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth?.user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export { PrivateRoute };
