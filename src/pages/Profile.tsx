import { useAuth } from 'hooks/useAuth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const exit = () => {
    auth?.signout(() => navigate('/'));
  };

  return (
    <div>
      <h1>Profile {auth?.user}</h1>
      <br />
      <button onClick={exit}>Singout</button>
    </div>
  );
};

export default Profile;
