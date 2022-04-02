import logo from './logo.svg';
import './App.css';
import AuthProvider from './components/AuthProvider';
import { Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout/Layout';
import PublicPage from './routes/Layout/public-route/PublicPage';
import LoginPage from './routes/Layout/login-route/LoginPage';
import RequireAuth from './components/RequireAuth';
import ProtectedPage from './routes/Layout/protected-route/ProtectedPage';

function App() {
  return (
    <AuthProvider>
      <h1>Authentication Example</h1>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/protected'
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
