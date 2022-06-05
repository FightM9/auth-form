import { ReactElement } from 'react';
import { UserData } from 'types';

// AuthProvider

export type Signin = (
  user: UserData,
  callback: () => void,
  error: (eror: string) => void
) => void;
export type Signout = (callback: () => void) => void;

export interface AuthContextType {
  user: UserData | null;
  signin: Signin;
  signout: Signout;
  isLoading: boolean;
}

export interface AuthProviderType{
  children: React.ReactNode;
}

// RequireAuthProps

export interface RoleRouteProps {
  children: ReactElement<any, any> | null;
}
