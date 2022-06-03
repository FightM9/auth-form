import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { RequireAuthProps } from './types';

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth?.user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
