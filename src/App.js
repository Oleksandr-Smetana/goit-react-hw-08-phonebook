import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import s from './App.module.css';

import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import { fetchCurrentUser } from './redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchCurrentUser()), [dispatch]);

  return (
    <div className={s.app}>
      <AppBar />

      <Routes>
        <Route
          exact="true"
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route path={'/login'} element={<LoginPage />} />

        <Route
          path="/contacts"
          element={<ContactsPage />}
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
  );
}

// const ContactsPage = lazy(() =>
//   import(
//     './pages/ContactsPage' /* webpackChunkName: "contacts-page" */
//   ),
// );
// const RegisterPage = lazy(() =>
//   import(
//     './pages/RegisterPage' /* webpackChunkName: "register-page" */
//   ),
// );
// const LoginPage = lazy(() =>
//   import(
//     './pages/LoginPage' /* webpackChunkName: "login-page" */
//   ),
// );
