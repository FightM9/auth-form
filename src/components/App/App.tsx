import { AuthProvider, RequireAuth } from 'hocs';
import { Login, NotFound, Profile } from 'pages';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div style={{ margin: '0 auto', width: 650 }}>
      {/* DEV ONLY START*/}
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>Login</Link>
        {/* DEV ONLY END*/}
      </div>

      <AuthProvider>
        <Routes>
          <Route path='/' element={<Navigate to={'/profile'} />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
