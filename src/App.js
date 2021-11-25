import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getCurrentUser } from './redux/auth/auth-selectors';

const ContactsPage = lazy(() =>
  import(
    './pages/ContactsPage' /* webpackChunkName: "contacts-page" */
  ),
);
const RegisterPage = lazy(() =>
  import(
    './pages/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);
const LoginPage = lazy(() =>
  import(
    './pages/LoginPage' /* webpackChunkName: "login-page" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getCurrentUser);
  // console.log(isFetchingCurrentUser);

  useEffect(() => dispatch(fetchCurrentUser()), [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <AppBar />

        <Routes>
          <Route
            exact="true"
            path="/"
            element={
              <PublicRoute>
                <Suspense fallback={null}>
                  <HomePage />
                </Suspense>
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                restricted
                redirectTo={'/contacts'}
              >
                <Suspense fallback={null}>
                  <RegisterPage />
                </Suspense>
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                restricted
                redirectTo={'/contacts'}
              >
                <Suspense fallback={null}>
                  <LoginPage />
                </Suspense>
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo={'/login'}>
                <Suspense fallback={null}>
                  <ContactsPage />
                </Suspense>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<h1>Error 404: Page not found.</h1>}
          />
        </Routes>

        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
        />
      </div>
    )
  );
}
