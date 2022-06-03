import { createContext, FC, useState } from 'react';
import {
  AuthContextInterface,
  AuthProviderInterface,
  Signin,
  Signout,
} from './types';

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider: FC<AuthProviderInterface> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const signin: Signin = (user, callback) => {
    setUser(user);
    callback();
  };

  const signout: Signout = (callback) => {
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
