import { useAuth } from 'hooks/useAuth';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'styles/Button';
import { ProfileWrapper, WelcomeText } from './ProfileStyle';

const Profile: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const singout = () => {
    auth?.signout(() => navigate('/'));
  };

  return (
    <ProfileWrapper>
      <WelcomeText>
        Здравствуйте, <b>{auth?.user?.name}</b>
      </WelcomeText>
      <Button color='secondary' onClick={singout}>
        Выйти
      </Button>
    </ProfileWrapper>
  );
};

export default Profile;
