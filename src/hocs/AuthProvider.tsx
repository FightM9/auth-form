import { createContext, FC, useEffect, useState } from 'react';
import { authService, userStore } from 'services';
import { UserData } from 'types';
import {
  AuthContextType,
  AuthProviderType,
  Signin,
  Signout,
} from './HocsTypes';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<AuthProviderType> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUser(userStore.get());
  }, []);

  const signin: Signin = async (user, callback, setError) => {
    setIsLoading(true);

    await authService
      .getUser(user)
      .then((data) => {
        if (data) {
          setUser(user);
          callback();
          // On remember password
          if (user.savePasword) {
            userStore.save(user);
          }
        }
      })
      .catch((error) => {
        setError(error.toString());
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signout: Signout = (callback) => {
    setUser(null);
    callback();
    userStore.clear();
  };

  const value = { user, signin, signout, isLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
