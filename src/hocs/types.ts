import { ReactElement } from "react";

// AuthProvider

export type Signin = (user: string, callback: () => void) => void;
export type Signout = (callback: () => void) => void;

export interface AuthContextInterface {
  user: string | null;
  signin: Signin;
  signout: Signout;
}

export interface AuthProviderInterface  {
  children: React.ReactNode;
}

// RequireAuthProps

export interface RequireAuthProps {
    children: ReactElement<any, any> | null;
  }

