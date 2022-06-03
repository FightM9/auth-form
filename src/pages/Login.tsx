import { useAuth } from 'hooks/useAuth';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth?.user) {
      navigate('/profile');
    }
  }, [auth?.user, navigate]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    auth?.signin(user, () => navigate('/profile', { replace: true }));
  };

  return (
    <>
      <div>
        <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <div>
              <input name='username' />
            </div>
          </label>
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
