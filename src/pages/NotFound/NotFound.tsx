import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'styles/Button';
import { NotFoundWrapper, Title } from './NotFoundStyle';

const NotFound: FC = () => {
  const navigate = useNavigate();
  const redirect = () => navigate('/', { replace: true });

  return (
    <NotFoundWrapper>
      <Title>404</Title>
      <p>Страница не найдена</p>
      <br />
      <Button onClick={redirect}>На главную</Button>
    </NotFoundWrapper>
  );
};

export default NotFound;
