import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, GuestRoute, PrivateRoute } from 'hocs';
import { Login, NotFound, Profile } from 'pages';
import { AppContent, AppLogo, AppWrapper } from './AppStyle';
import Logo from 'components/Logo/Logo';

const App = () => {
  return (
    <AppWrapper>
      <AppLogo>
        <Link to='/'>
          <Logo />
        </Link>
      </AppLogo>
      <AppContent>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Navigate to={'/profile'} />} />
            <Route
              path='/login'
              element={
                <GuestRoute>
                  <Login />
                </GuestRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </AppContent>
    </AppWrapper>
  );
};

export default App;
