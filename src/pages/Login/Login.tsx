import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Alert, LoginForm } from 'components';
import { LoginFormState } from 'components/Forms/FormType';
import { LoginWrapper } from './LoginStyle';

const Login: FC = () => {
  const [userData, setUserData] = useState<LoginFormState>();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    setError(null);
    if (auth) login();
  }, [userData]);

  const login = () => {
    if (userData && auth) {
      auth.signin(userData, goToProfile, setError);
    }
  };
  
  const goToProfile = () => navigate('/profile', { replace: true });

  return (
    <LoginWrapper>
      {error ? <Alert message={error} /> : null}
      <LoginForm setUserData={setUserData} loading={auth?.isLoading} />
    </LoginWrapper>
  );
};

export default Login;
