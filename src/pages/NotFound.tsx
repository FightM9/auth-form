import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <div>
      <h1>404</h1>
      <br />
      <Link to='/'>Home</Link>
    </div>
  );
};

export default NotFound;
